import { Ref, ref } from "vue"
import { BaseResponse, ListPageType } from "@/api/request"
interface ListQuery {
    page: number
    pageSize: number
}
interface LoadParamsType<T> {
    api: (listQuery: ListQuery) => Promise<BaseResponse<ListPageType<T>>>
    params?: {
        [key: string]: any
    }
}
interface ReturnType<T> {
    total: Ref<number>
    list: Ref<Array<T>>
    listQuery: Ref<ListQuery>
    loading: Ref<boolean>
    loadData: () => void
}
export function useLoadHook<T>(opt: LoadParamsType<T>): ReturnType<T> {
    const loading = ref(false)
    const total = ref(0)
    const list: Ref<Array<T>> = ref([])
    const listQuery = ref({
        page: 1,
        pageSize: 20,
        ...opt.params
    })

    const loadData = () => {
        loading.value = true
        opt.api(listQuery.value)
            .then((res) => {
                list.value = res.result.rows
                total.value = res.result.count
            })
            .finally(() => {
                loading.value = false
            })
    }
    return {
        total,
        list,
        listQuery,
        loading,
        loadData
    }
}
