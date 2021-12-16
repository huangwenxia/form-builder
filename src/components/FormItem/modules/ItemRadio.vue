<template>
  <a-radio-group v-model:value="model">
    <a-radio :style="radioStyle" :value="item.value" v-for="(item, i) in data.options" :key="i">{{ item.label }}</a-radio>
  </a-radio-group>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, watch, PropType, computed } from "vue"

import { ModuleType } from "@/store/form"
const PropsType = {
  data: {
    type: Object as PropType<ModuleType>,
    default() {
      return {}
    }
  },
  modelValue: {
    type: String,
    default: ""
  }
}
export default defineComponent({
  name: "ItemInput",
  props: PropsType,
  setup(props, context) {
    const value = ref<number>(1)
    const radioStyle = reactive({
      display: "block",
      height: "30px",
      lineHeight: "30px"
    })
    const defaultValue = computed(() => props.data.defaultValue)
    const model = ref("")
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
      model,
      value,
      radioStyle,
      defaultValue
    }
  }
})
</script>
