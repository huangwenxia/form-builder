<template>
  <ConfigProvider :locale="locale">
    <router-view />
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import zhCN from "ant-design-vue/es/locale/zh_CN"
import { ConfigProvider } from "ant-design-vue"
export default defineComponent({
  components: { ConfigProvider },
  data() {
    return {
      local: zhCN
    }
  }
})
</script>

<style lang="scss"></style>

