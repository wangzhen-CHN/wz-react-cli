import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import '@/assets/style/antd-reset.less'
import '@/assets/style/base/index.less'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.querySelector('#root'))
