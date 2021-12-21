<template>
  <a-checkbox-group v-model:value="model">
    <a-checkbox :style="radioStyle" :value="item.value" v-for="(item, i) in data.options" :key="i">{{ item.label }}</a-checkbox>
  </a-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref, watch, reactive, PropType } from "vue"

import { FormItemType } from "@/views/designer/interface"
const PropsType = {
  data: {
    type: Object as PropType<FormItemType>,
    default() {
      return {}
    }
  },
  modelValue: {
    type: Array as PropType<Array<string>>,
    default: []
  }
}
export default defineComponent({
  name: "ItemInput",
  props: PropsType,
  setup(props, context) {
    const value = ref<Array<number>>([])
    const radioStyle = reactive({
      display: "block",
      height: "30px",
      lineHeight: "30px",
      marginLeft: 0
    })
    const model = ref(props.modelValue)
    watch(model, (val) => {
      context.emit("update:modelValue", val)
    })
    watch(
      () => props.modelValue,
      function (val) {
        model.value = val
      }
    )
    return {
      value,
      radioStyle,
      model
    }
  }
})
</script>
