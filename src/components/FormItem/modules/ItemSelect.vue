<template>
  <a-select v-model:value="value" label-in-value style="width: 100%" :options="data.options" @change="handleChange"> </a-select>
</template>
<script lang="ts">
// import { SelectTypes } from "ant-design-vue/es/select"
import { defineComponent, ref, PropType, watch } from "vue"
import { FormItemType } from "@/views/designer/interface"

interface Value {
  value?: string
  label?: string
}
const Prop = {
  data: {
    type: Object as PropType<FormItemType>,
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
  name: "ItemSelect",
  props: Prop,
  setup(props, context) {
    const handleChange = (value: Value) => {
      value.label = value.value
    }
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
      value: ref<Value>({ value: "lucy" }),
      handleChange
    }
  }
})
</script>
