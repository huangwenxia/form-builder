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
export interface FormItemType {
    [key: string]: string | boolean | SelectProps["options"] | Array<string>
    id?: string
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
    modules: Array<FormItemType>
}
export interface StyleType {
    [key: string]: string | number
}

export interface FormProps {
    currentModuleId: string
    form: FormDetailType
}
export  interface Preload {
    module: FormItemType
    index: number
}
export type UpdatePropType = {
    id: string
    key: string
    value: string
}

