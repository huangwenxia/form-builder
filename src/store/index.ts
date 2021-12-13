import { createStore } from "vuex"
import form, { FormProps } from "./form"
import user, { UserProps } from "./user"

export interface GlobalDataProps {
    form: FormProps
    user: UserProps
}

export default createStore<GlobalDataProps>({
    // state: {
    //     form: {} as FormProps,
    //     user: {} as UserProps
    // },
    mutations: {},
    actions: {},
    modules: {
        form,
        user
    }
})
