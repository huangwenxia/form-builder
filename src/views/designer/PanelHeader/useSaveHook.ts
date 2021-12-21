import {ref, Ref} from "vue"
import * as I  from "@/api/interface"
import * as Utils from "@/utils"
import api from "@/api"
import { UpdateParams } from "@/api/form"
import { message } from "ant-design-vue"
interface SavePrams {
  detail: I.designer.FormDetailType
}
interface ReturnType {
  loading: Ref<boolean>
  previewRef: Ref<any>
  save: () => void
  publish: () => void
  preview: () => void
}
export function useSaveHook(saveParams: SavePrams): ReturnType {
  const loading = ref(false)
  const save = () => {
    const detail = saveParams.detail
    console.log("detail", detail)
    const postData = Utils.deepCopy(detail)
    const content = JSON.stringify(postData.content)
    const saveData: UpdateParams = {
      id: postData.id,
      title: postData.title,
      desc: postData.desc,
      content: content,
      cover: postData.cover
    }
    loading.value = true
    api.form
      .update(saveData)
      .then(() => {
        message.success("保存成功")
      })
      .finally(() => {
        loading.value = false
      })
  }

  const publish = () => {
    const detail = saveParams.detail
    loading.value = true
    api.form
      .publish(detail.id)
      .then(() => {
        message.success("发布成功")
      })
      .finally(() => {
        loading.value = false
      })
  }

  const previewRef = ref()
  const preview = () => {
    previewRef?.value.open()
  }

  return { save, publish, loading, previewRef, preview }
}
