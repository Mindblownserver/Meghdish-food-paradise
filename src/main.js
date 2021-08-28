import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import scrollanimation from './directions/scrollanimation'


const app = createApp(App)
app.directive("scrollanimation", scrollanimation);
app.use(router)
app.mount('#app')
