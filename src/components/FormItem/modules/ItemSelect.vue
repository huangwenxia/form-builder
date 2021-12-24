<template>
  <a-select v-model="modelValue" style="width: 100%" :options="data.options"> </a-select>
<!--  <a-select v-model:value="modelValue" label-in-value  style="width: 100%" :options="data.options" @change="handleChange"> </a-select>-->
</template>
<script lang="ts" setup>
import * as I from "@/api/interface"
interface Props {
  data:I.designer.FormItemType,
  modelValue:string,
}
const props = withDefaults(defineProps<Props>(),{
  data:()=>({} as I.designer.FormItemType),
  modelValue:"",
})
// const handleChange = (value:string) => {
//   value.label = value
// }
</script>
