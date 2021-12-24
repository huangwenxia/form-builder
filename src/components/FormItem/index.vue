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
import {ref} from "vue"
import * as I from "@/api/interface"
interface SaveForm {
  [key: string]: string | []
}
interface Props {
  data:I.designer.FormItemType,
  modelValue:string | [],
}
const props = withDefaults(defineProps<Props>(),{
  data:()=>({} as I.designer.FormItemType),
  modelValue:"",
})
const componentMap = ref({
  input: "ItemInput",
  radio: "ItemRadio",
  checkbox: "ItemCheckbox",
  select: "ItemSelect"
})
</script>
