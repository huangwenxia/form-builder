
import {reactive} from "vue"
import api from "@/api"

export function useDetailHook(){
    const detail = reactive({});

    return {detail}
}