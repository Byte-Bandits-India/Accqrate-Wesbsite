import React, { Component } from 'react'
import { Button } from 'antd'
import { DocumentDownload, Refresh } from 'iconsax-react'

interface PageButtonBoxProps {
  refs?: (ref: PageButtonBox | null) => void
  enablePage?: string
  dataSource?: Array<{ id: string | number }>
  onNextPage?: (lastId: string | number) => void
  pageLabel?: string
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  loader?: boolean
  style?: React.CSSProperties
}

export class PageButtonBox extends Component<PageButtonBoxProps> {
  componentDidMount() {
    this.props.refs?.(this)
  }

  componentWillUnmount() {
    this.props.refs?.(null)
  }

  onClickNext = () => {
    const { enablePage, dataSource = [], onNextPage } = this.props
    if (enablePage !== 'loader' && onNextPage && dataSource.length > 0) {
      const lastRecord = dataSource[dataSource.length - 1]
      if (lastRecord?.id) {
        onNextPage(lastRecord.id)
      }
    }
  }

  render() {
    const { enablePage, pageLabel, type, loader, style } = this.props

    if (!enablePage) return null

    return (
      <Button
        style={style}
        onClick={this.onClickNext}
        type={type || 'primary'}
        loading={loader}
      >
        {enablePage === 'loader' ? (
          <>
            <Refresh size={16} /> Loading..
          </>
        ) : (
          <>
            <DocumentDownload size={16} /> {pageLabel}
          </>
        )}
      </Button>
    )
  }
}

export default PageButtonBox
