<template>
    <div class="Modules">
      <div class="m-box" v-for="(item,index) in modules" :key="index">
        <div class="head">{{item.name}}</div>
        <ul class="list">
          <li  class="item" v-for="(child,i) in item.children" :key="i" @mousedown.stop="onMouseDown" :data-info="child.name + '|' + child.icon + '|' + child.type">
            <component class="icon" :is="child.icon" />
            <span class="name">{{ child.name }}</span>
          </li>
        </ul>
        <div class="content">

        </div>
      </div>
    </div>

</template>
<script lang="ts">
import { PicCenterOutlined, UnorderedListOutlined, DownSquareOutlined, CalendarOutlined, FieldBinaryOutlined } from "@ant-design/icons-vue"
export default {
  components: { PicCenterOutlined, UnorderedListOutlined, DownSquareOutlined, CalendarOutlined, FieldBinaryOutlined },

}
</script>
<script setup lang="ts">
    import {reactive} from "vue";
    const modules = reactive( [
      {
        name: "常用",
        children: [
          { name: "文本框", icon: "PicCenterOutlined", type: "input" },
          { name: "单选", icon: "UnorderedListOutlined", type: "radio" },
          { name: "多选", icon: "UnorderedListOutlined", type: "checkbox" },
          { name: "下拉", icon: "DownSquareOutlined", type: "select" },
          { name: "时间日期", icon: "CalendarOutlined", type: "date" },
          { name: "数字", icon: "FieldBinaryOutlined", type: "number" }
        ]
      }
    ])
</script>

<style scoped lang="scss">
.Modules{
  .m-box{
    margin-bottom: 10px;
    .head {
      margin-bottom: 10px;
      i {
        color: #999;
      }
    }
    .list{
      margin: 0;padding: 0;
      .item{
        width: 70px;
        display: inline-block;
        text-align: center;
        color: #666;
        padding: 5px 0;
        cursor: pointer;
        border-radius: 3px;
        font-size: 12px;
        margin-bottom: 10px;
        .icon{
          line-height: 1;
          vertical-align: top;
          pointer-events: none;
          width: 1em;
          height: 1em;
          display: inline-block;
          font-size: 30px;
          color: #999;
          margin-bottom: 5px;
        }
        .name{//变成块元素就换行了
          display: block;
          pointer-events: none;
        }
        &:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
      }
    }

  }
}
</style>