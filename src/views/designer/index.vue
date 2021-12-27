<template>
  <div class="design-container" v-if="detail">
    <PanelHeader :detail="detail"/>
    <PanelCenter :content="detail.content" :detail="detail"/>
    <PanelLeft :detail="detail"/>
    <PanelRight/>
  </div>
</template>

<script lang="ts" setup>
import {provide, reactive} from "vue"
import PanelCenter from "./PanelCenter/index.vue"
import PanelHeader from "./PanelHeader/index.vue"
import PanelLeft from "./PanelLeft/index.vue"
import PanelRight from "./PanelRight/index.vue"
import { useDetailHook } from "./useDetailHook"
import $MController from "./MController";

const {detail} = useDetailHook();
//provide，inject只能用在setup最顶层
//hwx:原生js构造函数实例化单例对象+vue3响应式 实现store

provide('$MController',reactive($MController))

// watchEffect(()=>{//hwx：数据渲染存在异步，watchEffect不可行;
//   if(detail.value?.content){
//     const $MController = MController(detail.value.content?.modules);
//     provide('$MController',reactive($MController))
//   }
// })


</script>

<style lang="scss" scoped>
.design-container{
 min-height: 100vh;
}
</style>