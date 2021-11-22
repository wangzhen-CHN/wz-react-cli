// 项目基础路由配置

import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import type { IRoutes } from '@/types/route'

const routes: IRoutes = [
  {
    name: 'NotMatch',
    path: '/404',
    exact: true,
    component: lazy(() => import('@/pages/404')),
    meta: {
      title: '404'
    }
  },
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('@/pages/home')),
    exact: true,
    meta: {
      title: '首页'
    }
  }
]

export default routes
