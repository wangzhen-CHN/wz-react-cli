import React from 'react'
import classNames from 'classnames'

const requireAll = (context: __WebpackModuleApi.RequireContext) => context.keys().map((element) => context(element))
const svgs = require.context('@/assets/svg', true, /\.svg$/)
requireAll(svgs)

interface IIconsProps {
  name?: string
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export default function SvgIcon({ name, className, onClick, style }: IIconsProps): JSX.Element {
  const svgCls = classNames(['match-svg-icon', className])
  const onClickHandler = () => {
    onClick?.()
  }
  return (
    <svg onClick={onClickHandler} className={svgCls} style={style}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}
