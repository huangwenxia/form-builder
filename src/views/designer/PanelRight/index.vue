<template>
  <div class="panel-right" :class="{ active:$MController.currentModuleId }">
    <ModuleEdit v-if="$MController.currentModuleId" />
<!--    <HeaderEdit v-if="currentHeader" />-->
  </div>
</template>
<script lang="ts" setup>
import {inject} from "vue"

import {MC} from "@/views/designer/MController";
const $MController = inject('$MController') as MC;
import ModuleEdit from "./ModuleEdit.vue"

</script>

<style lang="scss" scoped>
.panel-right {
  width: 300px;
  position: fixed;
  right: 0;
  top: 50px;
  bottom: 0;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  overflow: auto;
  transform: translateX(100%);
  transition: all 0.3s;
  &.active {
    transform: translateX(0);
  }
}
</style>
