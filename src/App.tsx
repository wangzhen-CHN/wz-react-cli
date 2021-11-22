import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import AllRoutes from '@/routes'
import renderRoutes from '@/routes/renderRoutes'

export default function AppRoot() {
  console.log('AppRoot 加载------')
  return (
    <ConfigProvider locale={zhCN}>
      <RecoilRoot>
        <BrowserRouter>{renderRoutes(AllRoutes)}</BrowserRouter>
      </RecoilRoot>
    </ConfigProvider>
  )
}
