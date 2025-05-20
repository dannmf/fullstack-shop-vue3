import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import router from '../src/router'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')