import type { RouteComponentProps } from 'react-router-dom'

type MetaProp = {
  title?: string
  requireAuth?: true
  [k: string]: any
}
export interface RoutePageProps extends RouteComponentProps {
  /** 当前路由配置信息 */
  routes: IRoutes
}

type RFc = (props: RoutePageProps) => JSX.Element

export interface IRoute {
  /** 路由标识 */
  name: string
  /** 路由路径 */
  path: string
  exact?: true
  /** 路由组件 */
  component: RFc | React.LazyExoticComponent<RFc>
  /** 路由元信息 */
  meta?: MetaProp
  /** 子级路由 */
  routes?: Array<IRoute>
}

/** 路由列表 */
export type IRoutes = Array<IRoute>
