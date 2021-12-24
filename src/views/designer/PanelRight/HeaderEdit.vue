<!--<template>-->
<!--  <div class="panel-module" v-if="currentHeader">-->
<!--    <div class="head">-->
<!--      <div class="title">头部设置</div>-->
<!--    </div>-->
<!--    <div class="form">-->
<!--      <div class="form-item">-->
<!--        <div class="label">标题</div>-->
<!--        <div class="det">-->
<!--          <a-input v-model:value="currentHeader.title" />-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-item">-->
<!--        <div class="label">描述</div>-->
<!--        <div class="det">-->
<!--          <a-input v-model:value="currentHeader.desc" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--import { defineComponent, computed } from "vue"-->
<!--import { useStore } from "vuex"-->
<!--import { GlobalDataProps } from "@/store"-->

<!--export default defineComponent({-->
<!--  components: {},-->
<!--  setup() {-->
<!--    const store = useStore<GlobalDataProps>()-->
<!--    const currentHeader = computed(() => store.getters.getCurrentHeader)-->
<!--    return {-->
<!--      currentHeader-->
<!--    }-->
<!--  }-->
<!--})-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.head {-->
<!--  height: 40px;-->
<!--  line-height: 40px;-->
<!--  padding: 0 15px;-->
<!--  border-bottom: 1px solid #ddd;-->
<!--}-->
<!--.form {-->
<!--  .form-item {-->
<!--    padding: 10px 15px;-->
<!--    .label {-->
<!--      margin-bottom: 5px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
