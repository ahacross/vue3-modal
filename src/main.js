import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import VfmPlugin from 'vue-final-modal'
import vfm from '@/plugins/vfm/'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VfmPlugin)
app.use(vfm)

app.mount('#app')
