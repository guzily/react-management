import React from 'react'
import ReactDOM from 'react-dom/client'
//样式初始化一般放在组件之前 其次是UI组件样式 最后是组件自定义的样式
import 'reset-css'
import '@/assets/styles/global.sass'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
