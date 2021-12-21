<template>
  <component :is="componentMap[data.type]" :data="data" v-model="model" />
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue"
import { FormItemType } from "@/views/designer/interface"

import ItemInput from "./modules/ItemInput.vue"
import ItemRadio from "./modules/ItemRadio.vue"
import ItemCheckbox from "./modules/ItemCheckbox.vue"
import ItemSelect from "./modules/ItemSelect.vue"
const Props = {
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
  name: "FormItem",
  components: { ItemInput, ItemRadio, ItemCheckbox, ItemSelect },
  props: Props,
  setup(props, context) {
    const componentMap = ref({
      input: "item-input",
      radio: "item-radio",
      checkbox: "item-checkbox",
      select: "item-select"
    })
    const model = ref(props.modelValue)
    watch(model, function (val) {
      context.emit("update:modelValue", val)
    })
    watch(
      () => props.modelValue,
      function (val) {
        model.value = props.modelValue
      }
    )
    return { componentMap, model }
  }
})
</script>
