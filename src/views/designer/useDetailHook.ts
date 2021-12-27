
import * as I from "@/api/interface";
import { ref, Ref } from "vue"
import { useRoute } from "vue-router"
import api from "@/api"
import $MController from "./MController";
export function useDetailHook(){
    const route = useRoute()
    const id = route.query.id || 0
    let detail:Ref<I.designer.FormDetailType | null> = ref(null)
    if (id) {
        api.form.detail(+id).then((res) => {
            let content: I.designer.ContentType | null
            try {
                content = JSON.parse(res.result.content)
            } catch (e) {
                content = null
            }
            if (content === null) {
                content = {
                    skin: {
                        containerStyle: {},
                        headerStyle: {}
                    },
                    modules: []
                }
            }
            detail.value = { ...res.result, content }

            if(detail.value && detail.value.content && detail.value.content.modules){
                $MController.moduleInit(detail.value.content.modules);//hwx:顶层初始化，必须链式详情和创建的modules
            }
        })
    }
    return {detail}
}