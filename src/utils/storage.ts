export default {
  session: {
    get: (key: string) => {
      const dataStr = window.sessionStorage.getItem(key)
      return dataStr && JSON.parse(dataStr)
    },
    set: (key: string, data: any) => {
      const dataStr = JSON.stringify(data)
      window.sessionStorage.setItem(key, dataStr)
    },
    remove: (key: string) => {
      window.sessionStorage.removeItem(key)
    }
  },
  local: {
    get: (key: string) => {
      const dataStr = window.localStorage.getItem(key)
      return dataStr && JSON.parse(dataStr)
    },
    set: (key: string, data: any) => {
      const dataStr = JSON.stringify(data)
      window.localStorage.setItem(key, dataStr)
    },
    remove: (key: string) => {
      window.localStorage.removeItem(key)
    }
  }
}
