import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index.js' // /index.js可以省略,默认	引入	index.js


createApp(App).use(router).mount('#app')
