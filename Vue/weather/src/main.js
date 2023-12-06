import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // /index.js可以省略,默认	引入	index.js

const app = createApp(App)
app.use(router)
app.mount('#app')
