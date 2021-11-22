// 项目基础路由配置
import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import type { IRoutes, IRoute } from '@/types/route'

// 路由规则名称唯一性校验
const routeValidChecker = (routes: IRoutes) => {
  let valid = true
  const routesName = routes.reduce((acc: string[], cur: IRoute) => {
    if (acc.includes(cur.name)) {
      console.error(`🈶️重复的路由名称${cur.name}`)
      valid = false
    } else {
      acc.push(cur.name)
    }
    return acc
  }, [])
  return valid
}

export default function renderRoutes(routes: IRoutes) {
  if (!routeValidChecker(routes)) return null
  return routes ? (
    <Suspense
      fallback={
        <div className='h100 fx-center c_level_4'>
          <span>加载中</span>
        </div>
      }
    >
      <Switch>
        {routes.map((route) => (
          <Route key={route.name} exact={route.exact} path={route.path} render={(props) => routeRender(route, props)} />
        ))}
        <Redirect from='*' to='/404' />
      </Switch>
    </Suspense>
  ) : null
}
const routeRender = (route: IRoute, props: any) => {
  // 登录判断(需要登录 && 未登录-->跳登录页面,,,,,,,不需要登录 || 已经登录-->正常跳转)
  // const login = route?.meta?.requireAuth && !TokenUidTenantId.loginToken // 跳登录

  // // 判断渲染route
  // if (login) {
  //   goLogin()
  //   return null
  // }
  return <route.component {...props} routes={route.routes} />
}
