import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'
import React, { Component } from 'react'

interface PaginationBoxProps extends PaginationProps {
  pageData?: {
    totalCount?: number
    page?: number
  }
  onChangePage?: (data: { page: number; perPage: number }) => void
}

class PaginationBox extends Component<PaginationBoxProps> {
  onChangePage = (page: number, perPage: number) => {
    this.props.onChangePage?.({ page, perPage })
  }

  render() {
    const { pageData, showSizeChanger = true, ...rest } = this.props

    if (pageData) {
      return (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <Pagination
            total={pageData.totalCount}
            showSizeChanger={showSizeChanger}
            onChange={this.onChangePage}
            defaultCurrent={1}
            current={pageData.page}
            {...rest} // ✅ allows `size="small"` and other props
          />
        </div>
      )
    }

    return null
  }
}

export default PaginationBox
