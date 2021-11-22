declare global {
  interface Window {
    /** 当前环境 */
    PMY_ENV: 'dev' | 'mit' | 'test' | 'uat' | 'prod'
    gio: any
  }
}
export {}
