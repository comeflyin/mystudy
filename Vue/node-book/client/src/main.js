import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible' // 自动适配移动端
import './assets/style/reset.css'
import { Button } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import router from './router'
import { Form, Field, CellGroup, Icon } from 'vant';

const app = createApp(App)

app
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Button)
  .use(Icon)
  .use(router)
  .mount('#app')
