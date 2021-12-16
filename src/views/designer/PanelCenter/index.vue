<template>
  <div class="panel-center">
中间
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  const a =ref(0)
</script>

<style lang="scss" scoped>
.panel-center{
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  min-height: calc(100vh - 50px);
  background: #f1f5f1;
  padding: 10px 0;
}
</style>