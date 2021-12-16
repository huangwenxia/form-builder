<template>
  <div class="panel-right">
    右边
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const a =ref(0)
</script>

<style lang="scss" scoped>
.panel-right{
  position: fixed;
  top: 50px;right: 0;
}
</style>