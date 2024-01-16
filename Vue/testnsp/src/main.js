import { createApp } from 'vue'

import App from './App.vue'
import nothingSpecial from 'nothing-special'
import '../node_modules/nothing-special/dist/index.css'

createApp(App)
  .use(nothingSpecial)
  .mount('#app')
