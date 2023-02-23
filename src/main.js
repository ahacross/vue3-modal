import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import VfmPlugin from 'vue-final-modal'
import vfm from '@/plugins/vfm/'
import pageVisibility from '@/directive/pageVisibility'
import intersectionObserver from '@/directive/intersectionObserver'
import VRuntimeTemplate from 'vue3-runtime-template'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('pageVisibility', pageVisibility)
app.directive('intersectionObserver', intersectionObserver)
app.component('VRuntimeTemplate', VRuntimeTemplate)

app.use(VfmPlugin)
app.use(vfm)

app.mount('#app')
