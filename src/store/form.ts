import { Module } from "vuex"
import { GlobalDataProps } from "./index"
import { SelectProps } from "ant-design-vue/es/select"
//整个编辑过程存储的那个表单对象
export interface FormDetailType {
  id: number
  title: string
  desc: string
  cover: string
  content: ContentType
}
//每个表单项的类型
export interface ModuleType {
  [key: string]: string | boolean | SelectProps["options"] | Array<string>
  id: string
  label: string
  type: string
  required: false
  desc?: string
  placeholder?: string
  options?: SelectProps["options"]
  defaultValue?: string | Array<string>
}
export interface ContentType {
  skin: {
    containerStyle: StyleType
    headerStyle: StyleType
  }
  modules: Array<ModuleType>
}
interface StyleType {
  [key: string]: string | number
}

export interface FormProps {
  currentModuleId: string
  form: FormDetailType
}
interface Preload {
  module: ModuleType
  index: number
}
type UpdatePropType = {
  id: string
  key: string
  value: string
}
const editorModule: Module<FormProps, GlobalDataProps> = {
  state: {
    form: {} as FormDetailType,
    currentModuleId: ""
  },
  mutations: {
    moduleAdd: (state: FormProps, preload: Preload) => {
      console.log("state.form.content.modules", state.form)
      state.form.content.modules.splice(preload.index, 0, preload.module)
    },
    moduleRemove: (state: FormProps, id: string) => {
      const index = state.form.content.modules.findIndex((a) => a.id == id)
      if (index > -1) {
        state.form.content.modules.splice(index, 1)
      }
    },
    moduleUp: (state: FormProps, id: string) => {
      const currentIndex = state.form.content.modules.findIndex((a) => a.id == id)
      if (currentIndex > 0) {
        const changeIndex: number = currentIndex - 1
        const current = state.form.content.modules[currentIndex]
        state.form.content.modules[currentIndex] = state.form.content.modules[changeIndex]
        state.form.content.modules[changeIndex] = current
      }
    },
    moduleDown: (state: FormProps, id: string) => {
      const currentIndex = state.form.content.modules.findIndex((a) => a.id == id)
      if (currentIndex < state.form.content.modules.length - 1) {
        const changeIndex: number = currentIndex + 1
        const current = state.form.content.modules[currentIndex]
        state.form.content.modules[currentIndex] = state.form.content.modules[changeIndex]
        state.form.content.modules[changeIndex] = current
      }
    },
    moduleUpdate: (state: FormProps, { id, key, value }: UpdatePropType) => {
      const current: ModuleType | undefined = state.form.content.modules.find((a) => a.id == id)
      if (current) {
        current[key] = value
      }
    },
    setCurrent: (state: FormProps, id: string) => {
      state.currentModuleId = id
    },
    setForm: (state: FormProps, preload: FormDetailType) => {
      state.form = preload
    }
  },
  actions: {},
  getters: {
    getCurrentModule: (state) => {
      const modules = state.form.content?.modules || []
      return modules.find((module) => module.id === state.currentModuleId)
    },
    getModuleList: (state): Array<ModuleType> => {
      return state.form?.content?.modules || []
    }
  }
}
export default editorModule
