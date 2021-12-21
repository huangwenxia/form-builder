import { createStore } from "vuex"
import user, { UserProps } from "./user"

export interface GlobalDataProps {
    user: UserProps
}

export default createStore<GlobalDataProps>({
    // state: {
    //     user: {} as UserProps
    // },
    mutations: {},
    actions: {},
    modules: {
        user
    }
})
