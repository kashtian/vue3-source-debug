import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)

app.mount('#app')

/**
 * 应用配置，错误捕获，捕获所有子组件上报的错误
 */

app.config.errorHandler = err => {
  console.error('app error: ', err)
}
