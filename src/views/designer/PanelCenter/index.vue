<template>
  <div class="panel-center">
    <div class="wrapper">
      <div class="head">
        <div class="title">{{'测试表达' }}</div>
        <div class="desc">{{ '测试表达' }}</div>
      </div>
    </div>
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
  .wrapper{
    background: rgba(255, 255, 255, 0.9);
    min-height: calc(100vh - 70px);
    width: 800px;
    margin: 0 auto;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.05);
    .head {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #ddd;
      .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.4;
      }
      .desc {
        margin-top: 10px;
      }
    }
  }
}

</style>