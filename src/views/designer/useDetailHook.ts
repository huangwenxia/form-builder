
import {reactive} from "vue"
import api from "@/api"
import {ContentType} from "@/views/designer/interface";

export function useDetailHook(){
    const detail = reactive({
        id: '',
        title: '',
        desc: '',
        cover: '',
        content: {} as ContentType
    });

    return {detail}
}