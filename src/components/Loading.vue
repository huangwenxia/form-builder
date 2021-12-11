<template>
  <div class="loading" v-if="loading">
    <div class="img"><img src="../assets/images/loading.svg" height="50" /></div>
    <div class="txt">
      <slot name="msg">{{ msg }}</slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
// {
//   msg:"加载中",
//       loading:false
// }
// defineProps<{ msg: string,loading:boolean }>() //采用ts专有声明，无默认值
// 采用ts专有声明，有默认值
interface Props {
  msg: string
  loading: boolean
}
const props = withDefaults(defineProps<Props>(), {
  msg: '加载中',
  loading: false
})


</script>
<style lang="scss" scoped>
.loading {
  text-align: center;
  .img {
    margin-bottom: 10px;
  }
  .txt {
    color: #999;
  }
}
</style>
