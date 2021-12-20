<template>
  <div class="module-control">
    <div class="drag-hear active"><span>放在这里</span></div>
    <div class="outline"></div>
    <div class="control" v-if="!isEmpty">
      <div class="btn"><ArrowUpOutlined /></div>
      <div class="btn"><ArrowDownOutlined /></div>
      <div class="btn"><CloseOutlined /></div>
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
const props = defineProps({
  isEmpty:Boolean
})
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