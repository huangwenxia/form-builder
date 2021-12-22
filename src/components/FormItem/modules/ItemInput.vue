<template>
  <a-input v-model="modelValue" :placeholder="data.placeholder" />
</template>
<script lang="ts" setup>
import * as I from "@/api/interface"
interface Props {
  data:I.designer.FormItemType,
  modelValue:string
}
const props = withDefaults(defineProps<Props>(),{
  data:()=>({} as I.designer.FormItemType),
  modelValue:"",
})
</script>
