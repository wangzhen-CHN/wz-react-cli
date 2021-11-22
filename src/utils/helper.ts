import dayjs from 'dayjs'

/**
 * 生成唯一标识
 */
export function uuid() {
  return Math.random().toString(16).slice(6) + Date.now().toString(36)
}

/**
 * 判断是否是数组类型
 */
export function isArray<T extends Array<any>>(arr: any): arr is T {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * 判断是否是对象类型
 */
export function isObject<T extends { [k: string]: any }>(obj: any): obj is T {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
