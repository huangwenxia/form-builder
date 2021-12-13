<template>
  <div class="header">
    <div class="right">
      <ul>
        <li v-if="!user.id"><router-link to="/login">登录</router-link></li>
        <li v-else>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
              <span class="user-info">
                <img src="../../assets/images/avatar.png" />
                <span class="name">{{ user.name || user.email }}</span>
                <DownOutlined class="icon" />
              </span>
            </a>
            <template #overlay>
              <a-menu @click="onClick">
                <a-menu-item key="0">
                  <router-link to="/">我的表单</router-link>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3">退出登录</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </li>
      </ul>
    </div>
    <div class="logo">
      <img src="../../assets/images/logo.svg" />
    </div>
    <div class="title">表单设计器</div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, computed, VNodeChild } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { DownOutlined } from "@ant-design/icons-vue"
interface MenuInfo {
  key: string
  keyPath: string[]
  item: VNodeChild
  domEvent: MouseEvent
}
const store = useStore()
const router = useRouter()
const user = computed(() => store.state.user.user)
const onClick = ({ key }: MenuInfo) => {
  console.log(`Click on item ${key}`)
  if (key == "3") {
    store.dispatch("logout").then(() => {
      router.push("/login")
    })
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  height: 50px;
  padding: 0 15px;
  .logo {
    margin: 7px;
    background: rgba(229, 229, 229, 1);
    border-radius: 12px;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    padding: 5px;
    img {
      height: 25px;
      vertical-align: top;
    }
  }
  .title {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    vertical-align: middle;
  }
  .right {
    float: right;
    ul {
      li {
        float: left;
        padding: 15px 10px;
        list-style: none;
      }
    }
  }
  .user-info {
    display: inline-block;
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 5px;
    }
    .icon {
      margin-left: 10px;
      color: #aaa;
    }
  }
}
</style>
