<template>
  <component :is="componentMap[data.type]" :data="data" v-model="modelValue" />
</template>
<script lang="ts">
import ItemInput from "./modules/ItemInput.vue"
import ItemRadio from "./modules/ItemRadio.vue"
import ItemCheckbox from "./modules/ItemCheckbox.vue"
import ItemSelect from "./modules/ItemSelect.vue"
export default {
  components: { ItemInput, ItemRadio, ItemCheckbox, ItemSelect }

}
</script>

<script lang="ts" setup>
import {ref, watchEffect} from "vue"
import * as I from "@/api/interface"
interface SaveForm {
  [key: string]: string | string[]
}
interface Props {
  data:I.designer.FormItemType,
  modelValue:string,
  form:SaveForm
}
const props = withDefaults(defineProps<Props>(),{
  data:()=>({} as I.designer.FormItemType),
  modelValue:"",
  form:()=>({} as SaveForm)
})
const componentMap = ref({
  input: "ItemInput",
  radio: "ItemRadio",
  checkbox: "ItemCheckbox",
  select: "ItemSelect"
})
const init = ()=>{
  if(!props.data['id']) {
    props.data['id'] = "";
  }
  props.form[props.data['id']] = props.data.defaultValue || "";
}
init();
</script>
