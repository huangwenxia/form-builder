import { ref, Ref } from "vue"
import api from "@/api"
import { message } from "ant-design-vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
interface RuleItem {
  required: boolean
  message: string
  trigger: string
}
interface Rules {
  [key: string]: Array<RuleItem>
  // name: Array<RuleItem>
}
interface UseLoginHook {
  form: Ref<{
    name: string
    password: string
  }>
  loading: Ref<boolean>
  onSubmit: () => void
  rules: Ref<Rules>
  formRef: Ref<undefined>
}
export const useLoginHook = (): UseLoginHook => {
  const router = useRouter()
  const store = useStore()
  const formRef = ref()
  const form = ref({
    name: "",
    password: ""
  })
  const rules: Ref<Rules> = ref({
    name: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
  })
  const loading = ref(false)

  const onSubmit = (): void => {
    formRef.value.validate().then(() => {
      api.system.user.login(form.value).then((res) => {
        message.success("登录成功")
        localStorage.setItem("token", res.result)
        store.dispatch("getUserInfo").then(() => {
          router.push("/")
        })
      })
    })
  }
  return {
    form,
    rules,
    onSubmit,
    loading,
    formRef
  }
}
