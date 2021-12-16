<template>
  <a-input v-model:value="model" :placeholder="data.placeholder" />
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue"

import { ModuleType } from "@/store/form"
const Props = {
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
  props: Props,
  setup(props, context) {
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
    return { model }
  }
})
</script>
