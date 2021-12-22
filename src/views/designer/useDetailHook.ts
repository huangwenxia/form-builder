
import {reactive} from "vue"
import api from "@/api"
import * as I from "@/api/interface";
import {StyleType} from "@/api/interface/designer";

export function useDetailHook(){
    const detail = reactive({
        id: '',
        title: '测试表达',
        desc: '测试表达',
        cover: '',
        content: {
            skin: {
                containerStyle: {},
                headerStyle:{},
            },
            modules:[],
        }
    });

    return {detail}
}