import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import comps from "./components/global"
import "normalize.css"
// import "./assets/css/main.scss"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
const app = createApp(App)
comps.forEach((a) => {
    app.component(a.name, a)
})
app.use(store).use(router).use(Antd).mount('#app')

