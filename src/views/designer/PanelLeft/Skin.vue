<template>
  <div class="">
    <div class="skin-box" v-for="(item, index) in modules" :key="index">
      <div class="head"><i class="el-icon-caret-bottom"></i> {{ item.name }}</div>
      <ul class="list">
        <li v-for="(child, i) in item.children" :key="i" @click.stop="select(child)">
          <div class="icon" :style="{ backgroundPosition: child.position }" />
          <span class="txt">{{ child.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref, Ref } from "vue"
import * as I from "@/api/interface"
// import { PicCenterOutlined, UnorderedListOutlined, DownSquareOutlined, CalendarOutlined, FieldBinaryOutlined } from "@ant-design/icons-vue"
interface ModuleItemType {
  name: string
  position: string
  skin: {
    containerStyle: {
      [key: string]: string | number
    }
    headerStyle: {
      [key: string]: string | number
    }
  }
}
interface ModuleType {
  name: string
  children: Array<ModuleItemType>
}
interface Props {
  content:I.designer.ContentType
}
const props = withDefaults(defineProps<Props>(),{
  content:()=>({} as I.designer.ContentType)
})

const sourceData: ModuleType[] = [
  {
    name: "纯色",
    children: [
      { name: "杜若", position: "0 0", skin: { containerStyle: {}, headerStyle: { background: "rgb(59, 103, 160)", color: "#fff", borderBottom: "5px solid #2d4e7b" } } },
      { name: "杜若-深", position: "-210px 0", skin: { containerStyle: { backgroundColor: "#13293d" }, headerStyle: { background: "rgb(59, 103, 160)", color: "#fff", borderBottom: "5px solid #2d4e7b" } } },
      { name: "浅葱", position: "0 -110px", skin: { containerStyle: {}, headerStyle: { background: "#35a4b7", color: "#fff", borderBottom: "5px solid #247280" } } },
      { name: "浅葱-深", position: "-210px -110px", skin: { containerStyle: { backgroundColor: "#263d42" }, headerStyle: { background: "#35a4b7", color: "#fff", borderBottom: "5px solid #247280" } } },
      { name: "若竹", position: "0 -220px", skin: { containerStyle: {}, headerStyle: { background: "#68be8d", color: "#fff", borderBottom: "5px solid #388358" } } },
      { name: "若竹-深", position: "-210px -220px", skin: { containerStyle: { backgroundColor: "#053225" }, headerStyle: { background: "#68be8d", color: "#fff", borderBottom: "5px solid #388358" } } },
      { name: "黄赤", position: "0 -330px", skin: { containerStyle: {}, headerStyle: { background: "#ec6800", color: "#fff", borderBottom: "5px solid #b95300" } } },
      { name: "黄赤-深", position: "-210px -330px", skin: { containerStyle: { backgroundColor: "#813405" }, headerStyle: { background: "#ec6800", color: "#fff", borderBottom: "5px solid #b95300" } } },
      { name: "胭脂", position: "0 -440px", skin: { containerStyle: {}, headerStyle: { background: "#9d2933", color: "#fff", borderBottom: "5px solid #671b20" } } },
      { name: "胭脂-深", position: "-210px -440px", skin: { containerStyle: { backgroundColor: "#bd4a4e" }, headerStyle: { background: "#9d2933", color: "#fff", borderBottom: "5px solid #671b20" } } },
      { name: "蓝墨茶", position: "0 -550px", skin: { containerStyle: {}, headerStyle: { background: "#393e46", color: "#fff", borderBottom: "5px solid #000000" } } },
      { name: "蓝墨茶-深", position: "-210px -550px", skin: { containerStyle: { backgroundColor: "#090909" }, headerStyle: { background: "#393e46", color: "#fff", borderBottom: "5px solid #000000" } } }
    ]
  }
]
const modules: Ref<ModuleType[]> = ref(sourceData)
const select = (data: ModuleItemType) => {
  const content = props.content
  content.skin = data.skin
}
</script>

<style lang="scss" scoped>
.skin-box {
  margin-bottom: 10px;
  .head {
    margin-bottom: 10px;
    i {
      color: #999;
    }
  }
  .list {
    margin: 0;
    padding: 0;
    li {
      width: 104px;
      height: 80px;
      display: inline-block;
      margin-right: 10px;
      text-align: center;
      color: #666;
      cursor: pointer;
      border-radius: 3px;
      font-size: 12px;
      margin-bottom: 10px;
      overflow: hidden;
      background: #fff;
      border: 1px solid #ddd;
      padding: 1px;
      position: relative;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .icon {
        width: 210px;
        height: 110px;
        position: absolute;
        left: 50%;
        margin-left: -105px;
        top: 0;
        background-image: url(../../../assets/images/pure_210.png);
        background-repeat: no-repeat;
        transform: scale(0.8);
        transform-origin: top center;
      }
      span {
        display: block;
        pointer-events: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.9);
      }
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
