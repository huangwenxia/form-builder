import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
import Home from "../views/Home.vue"
import store from "@/store"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/design",
        name: "Design",
        component: () => import("@/views/designer/index.vue")
    },
    {
        path: "/show",
        name: "Show",
        component: () => import("@/views/show/index.vue")
    },
    // {
    //     path: "/detail",
    //     name: "Detail",
    //     component: () => import("@/views/detail/index.vue")
    // },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/public/Login.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    NProgress.start()
    const whiteList = ["/show", "/login"]
    if (whiteList.indexOf(to.path) > -1) {
        next()
    } else {
        store
            .dispatch("getUserInfo")
            .then(() => {
                next()
            })
            .catch(() => {
                next({//hwx:重定向到登录页面
                    path: "/login"
                })
            })
    }
})
router.afterEach(() => {
    NProgress.done()
})

export default router
