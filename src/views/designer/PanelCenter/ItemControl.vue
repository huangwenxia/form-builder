<template>
  <div class="module-control" :class="{ active: currentModuleId == data.id }" @click.stop="setCurrent">
    <div class="drag-hear"><span>放在这里</span></div>
    <div class="outline"></div>
    <div class="control" v-if="!props.isEmpty">
      <div class="btn" @click.stop="moduleUp"><ArrowUpOutlined /></div>
      <div class="btn" @click.stop="moduleDown"><ArrowDownOutlined /></div>
      <div class="btn" @click.stop="moduleRemove"><CloseOutlined /></div>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { CloseOutlined, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue"
export  default {
  components: { CloseOutlined, ArrowUpOutlined, ArrowDownOutlined },
}
</script>
<script setup lang="ts">
import * as I from "@/api/interface"

import {computed, inject} from "vue";
import {MC} from "@/views/designer/MController";
const $MController = inject('$MController') as MC;

interface Props {
  isEmpty?:boolean,//非必填
  data?:I.designer.FormItemType
}
const props = withDefaults(defineProps<Props>(),{
  isEmpty:false,
  data:()=>({} as I.designer.FormItemType)
})
const currentModuleId =computed(()=> $MController.currentModuleId);//hwx:因为在最顶层provide('$MController',reactive($MController))
 const setCurrent = () => {
   if (!props.isEmpty) {
     $MController.setCurrent(props.data.id)
   }
 }
const moduleRemove = () => {
  $MController.moduleRemove(props.data.id);
}
const moduleUp = () => {
  $MController.moduleUp(props.data.id);
}
const moduleDown = () => {
  $MController.moduleDown(props.data.id);
}
</script>

<style scoped lang="scss">
  .module-control{
    position: relative;
    &.active {
      background: #fff8dc;
    }
    .control{
      position: absolute;
      right: 0;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
      display: none;
      .btn{
        display: inline-block;
        background: #ffffff;
        text-align: center;
        cursor: pointer;
        width: 30px;
        line-height: 30px;
        &:hover{
          background: #f8f8f8;
        }
        &:first-child {
          border-radius: 0 0 0 5px;
        }
      }
    }
    .outline{
      position: absolute;
      top: 0;left: 0;
      width: 100%;
      height: 100%;
      border: 1px dashed #ddd;
      display: none;
      pointer-events: none;
    }
    .drag-hear{
      text-align: center;
      background: #efefef;
      color: #999;
      position: relative;
      height: 0;
      overflow: hidden;
      transition: height 0.3s;
      &.active {
        height: 30px;
      }
      &:before {
        content: "";
        display: block;
        border-top: 1px dashed #ccc;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 0;
      }
      span {
        position: relative;
        display: inline-block;
        z-index: 2;
        background: #efefef;
        padding: 5px 10px;
      }
    }
    &:hover {
      .outline,
      .control {
        display: block;
      }
    }
  }
</style>