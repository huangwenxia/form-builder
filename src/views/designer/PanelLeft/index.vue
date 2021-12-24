<template>
  <div class="panel-left">
    <div class="menu-tabs-bar">
       <ul class="tabs">
         <li class="tab" :class="{active:index==currTab}" @click="currTab = index" v-for="(tab,index) in menuArray">
           <component class="icon" :is="tab.icon" />
           <span>{{ tab.name }}</span>
         </li>
         <li class="tab tab-active" :style="{ transform: 'translateY(' + currTab * 100 + '%)' }"><div class="active-border"></div></li>
       </ul>
    </div>
    <div class="tab-content" v-show="currTab==0">
      <Modules :modules="detail.content.modules" />
    </div>
    <div class="tab-content" v-show="currTab==1">
      <Skin :content="detail.content"></Skin>
    </div>
  </div>
</template>
<script lang="ts">
import {AppstoreOutlined, FileTextOutlined} from "@ant-design/icons-vue"
export default {
  components:{AppstoreOutlined,FileTextOutlined}
}
</script>
<script setup lang="ts">
import {ref} from "vue";
import Modules from "./Modules.vue"
import Skin from "./Skin.vue"
import * as I from "@/api/interface"
interface Props {
  detail:I.designer.FormDetailType,
}
const props = withDefaults(defineProps<Props>(),{
  detail:() => ({} as I.designer.FormDetailType)
})
const menuArray = ref([
  { name: "模块", icon: 'AppstoreOutlined' },
  { name: "皮肤", icon: 'FileTextOutlined' }
  // { name: "模块", icon: createVNode(AppstoreOutlined) },
  // { name: "皮肤", icon: createVNode(FileTextOutlined) }
])
const currTab = ref(0)
</script>

<style lang="scss" scoped>
.panel-left{
  position: fixed;
  top: 50px;left: 0;bottom: 0;//撑满全屏了

  display: flex;//.tab-content默认就是主轴排列
  background: #403f3e;
  box-shadow: 0 0 10px rgb(0 0 0 / 5%);
  overflow: hidden;
  z-index: 30;
  .menu-tabs-bar{
    .tabs{
      margin: 0;padding: 0;
      .tab{
        position: relative;
        height: 84px;width: 64px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        fill: #a6a6a6;
        cursor:pointer;
        font-size: 14px;
        .icon{
          font-size: 26px;
            margin-bottom: 5px;
        }
        &.active {
          color: #fe714b;
        }
      }
      .tab-active{
        position: absolute;
        top: 0;
        height: 84px;
        width: 64px;
        margin: 0;
        background: #fff;
        border: none;
        transition: transform 0.3s ease-in-out;
        z-index: -1;//hwx:在所以tab最底部
        &:before {
          content: "";
          width: 10px;
          height: 10px;
          background: #fff;
          position: absolute;
          top: -10px;//hwx
          right: 0;//hwx
        }
        &:after {
          content: "";
          width: 10px;
          height: 10px;
          background: #403f3e;
          position: absolute;
          top: -10px;//hwx
          right: 0;//hwx
          border-radius: 0 0 10px 0;
        }

        .active-border{
          background: 0 0;
          border: none;
          position: absolute;
          width: auto;
          height: auto;
          top: 100%;//hwx
          right: 0;
          border-bottom-right-radius: 4px;
          border-top-right-radius: 4px;
          &:before {
            content: "";
            width: 10px;
            height: 10px;
            background: #fff;
            position: absolute;
            bottom: -10px;
            right: 0;
          }
          &:after {
            content: "";
            width: 10px;
            height: 10px;
            background: #403f3e;
            position: absolute;
            bottom: -10px;//hwx
            right: 0;
            border-radius: 0 10px 0 0;
          }
        }
      }
    }
  }
  .tab-content{
    width: 240px;
    background: #fff;
    padding: 20px 10px;
    overflow: auto;
  }
}
</style>