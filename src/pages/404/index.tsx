import React from 'react'
import { Empty } from 'antd'

export default function NotMatch() {
  return (
    <div className='fx-center' style={{ height: '80vh' }}>
      <Empty description='页面出错了' image={require('./404.png')} />
    </div>
  )
}
