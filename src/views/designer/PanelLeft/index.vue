<template>
  <div class="panel-left">
    <div class="menu-tabs-bar">
       <ul class="tabs">
         <li class="tab" :class="{active:index==currTab}" @click="currTab = index" v-for="(tab,index) in menuArray">
           <component class="icon" :is="tab.icon" />
           <span>{{ tab.name }}</span>
         </li>
       </ul>
    </div>
    <div class="tab-content" v-show="currTab==0">
      模块
    </div>
    <div class="tab-content" v-show="currTab==1">
      皮肤
    </div>
  </div>
</template>

<script setup lang="ts">
import {AppstoreOutlined, FileTextOutlined} from "@ant-design/icons-vue"
import {createVNode, ref} from "vue";
const menuArray = ref([
  { name: "模块", icon: createVNode(AppstoreOutlined) },
  { name: "皮肤", icon: createVNode(FileTextOutlined) }
])
const currTab = ref(0)
</script>

<style lang="scss" scoped>
.panel-left{
  position: fixed;
  top: 50px;left: 0;
}
</style>