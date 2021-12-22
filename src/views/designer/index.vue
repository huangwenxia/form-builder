<template>
  <div class="design-container">
    <PanelHeader :detail="detail"/>
    <PanelCenter :content="detail.content" :detail="detail"/>
    <PanelLeft :detail="detail"/>
    <PanelRight/>
  </div>
</template>

<script lang="ts" setup>
import PanelCenter from "./PanelCenter/index.vue"
import PanelHeader from "./PanelHeader/index.vue"
import PanelLeft from "./PanelLeft/index.vue"
import PanelRight from "./PanelRight/index.vue"
import { useDetailHook } from "./useDetailHook"
const {detail} = useDetailHook()
</script>

<style lang="scss" scoped>
.design-container{
 min-height: 100vh;
}
</style>