"use client";

import { useParams } from "next/navigation";
import { Skeleton, Space } from "antd";
import { getIn, useFormikContext } from "formik";
import { FunctionComponent, ReactNode, memo, useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Button from "../Button";
import { Trash } from "iconsax-react";
import { PlusOutlined } from "@ant-design/icons";

type TFieldArray = {
  name: string
  editable?: boolean
  viewOnly?: boolean
  allowEmpty?: boolean
  children: FunctionComponent<
    {
      i: number
      setFieldValue: (field: string, value: unknown, shouldValidate?: boolean | undefined) => void
    } & TLineItem
  >
  defaultValues: string
  additionalValues: Record<string, unknown>
  delay?: number
  loaderCount?: number
  showAdd?: boolean
  title?: ReactNode
  addRight?: boolean
}

type TLineItem = {
  id: string
  new: boolean
}

function FieldArray({
  name,
  defaultValues,
  additionalValues,
  editable,
  viewOnly,
  allowEmpty,
  delay = 500,
  loaderCount = 3,
  showAdd,
  children: Comp,
  title,
  addRight
}: TFieldArray) {
  const { values, setFieldValue } = useFormikContext<{ [index: string]: [] }>();
  const params = useParams();
  const id = params?.id as string | undefined;
  const [mount, setMount] = useState(false);
  const sm = useMediaQuery('(max-width: 767px)')
  const md = useMediaQuery('(max-width: 900px)')

  const items = getIn(values, name) as []

  const addRow = () => {
    setFieldValue(name, [...items, defaultValues])
  }

  const removeRow = (index: number) => {
    setFieldValue(
      name,
      items.filter((_, i) => i !== index)
    )
  }

  useEffect(() => {
    setTimeout(() => {
      setMount(true)
    }, delay)
  }, [])

  return mount ? (
    <>
      {items.map((item: TLineItem, i: number) => (
        <div className="list-field" key={i}>
          <div style={{ width: '100%' }}>
            {title}
            <Comp
              {...{
                ...item,
                ...additionalValues,
                i,
                itemsCount: items.length,
                setFieldValue
              }}
            />
          </div>
          {(item.new || ((editable || !id) && (items.length > 1 || allowEmpty))) && (
            <div className="remove-column pl-2" style={{ position: 'absolute', right: -30 }}>
              <Button variant="primary" className="mt-4 btn-glow delete-field" onClick={() => removeRow(i)}>
                <Trash className="mr-0" />
              </Button>
            </div>
          )}
        </div>
      ))}
      {(showAdd || ((editable || !id) && !viewOnly)) && (
        <Button
          style={{ position: 'absolute', bottom: -18, ...(addRight && { right: -25, bottom: 0 }) }}
          success
          onClick={addRow}>
          <PlusOutlined size={16} /> Add
        </Button>
      )}
    </>
  ) : (
    <Space size="middle" className="field-array">
      {[...Array(sm ? 2 : md ? 3 : loaderCount)].map((item, i) => (
        <Skeleton.Input key={i} active />
      ))}
    </Space>
  )
}

export default memo(FieldArray)
