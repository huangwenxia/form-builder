import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import comps from "./components/global"
import "normalize.css"
// import "./assets/css/main.scss" hwx:在viteConfig中配置了
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

const app = createApp(App)
comps.forEach((a) => {
    const path = a.__file || ""
    path.match(/(\w+)?\.(\w+)/)
    app.component(RegExp.$1, a)
})
app.use(store).use(router).use(Antd).mount("#app")
