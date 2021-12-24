<template>
  <a-checkbox-group v-model="modelValue">
    <a-checkbox :style="radioStyle" :value="item.value" v-for="(item, i) in data.options" :key="i">{{ item.label }}</a-checkbox>
  </a-checkbox-group>
</template>
<script lang="ts" setup>
import {reactive } from "vue"
import * as I from "@/api/interface"
interface Props {
  data:I.designer.FormItemType,
  modelValue:Array<string>[]
}
const props = withDefaults(defineProps<Props>(),{
  data:()=>({} as I.designer.FormItemType),
  modelValue:()=>[],
})
const radioStyle = reactive({
  display: "flex",
  height: "30px",
  lineHeight: "30px",
  marginLeft: 0
})

</script>
