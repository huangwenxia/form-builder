<template>
  <a-radio-group v-model="modelValue">
    <a-radio :style="radioStyle" :value="item.value" v-for="(item, i) in data.options" :key="i">{{ item.label }}</a-radio>
  </a-radio-group>
</template>
<script lang="ts" setup>
import * as I from "@/api/interface"
import {reactive} from "vue";
interface Props {
  data:I.designer.FormItemType,
  modelValue:string
}
const props = withDefaults(defineProps<Props>(),{
  data:()=>({} as I.designer.FormItemType),
  modelValue:"",
})
const radioStyle = reactive({
  display: "block",
  height: "30px",
  lineHeight: "30px"
})
</script>
