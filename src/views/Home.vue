<template>
  <div>
    home页面
  </div>
<!--  <div class="container">-->
<!--    <HeaderBar />-->
<!--    <div class="content">-->
<!--      <div class="filter-head">-->
<!--        <div class="btn btn-primary" @click="toAdd">+ 新建表单</div>-->
<!--      </div>-->
<!--      <div class="tit-bar">-->
<!--        <span class="title">我的表单（{{ projectList.length }}）</span>-->
<!--      </div>-->
<!--      <div class="project-list">-->
<!--        <div class="item" @click="toDesign(item)" v-for="(item, index) in projectList" :key="index">-->
<!--          <div class="img">-->
<!--            <img class="empimg" src="../assets/images/empty.png" />-->
<!--            <div class="btn-group">-->
<!--              <a-tooltip title="预览">-->
<!--                <div class="btn btn-preview" @click.stop="toShow(item)">-->
<!--                  <EyeOutlined />-->
<!--                </div>-->
<!--              </a-tooltip>-->
<!--              <a-tooltip title="编辑">-->
<!--                <div class="btn btn-edit" @click.stop="toAdd(item)">-->
<!--                  <FormOutlined />-->
<!--                </div>-->
<!--              </a-tooltip>-->
<!--              <a-tooltip title="反馈详情">-->
<!--                <div class="btn btn-detail" @click.stop="toDetail(item)">-->
<!--                  <FileDoneOutlined />-->
<!--                </div>-->
<!--              </a-tooltip>-->
<!--              <a-tooltip title="删除">-->
<!--                <div class="btn btn-remove" @click.stop="remove(item)">-->
<!--                  <DeleteOutlined />-->
<!--                </div>-->
<!--              </a-tooltip>-->
<!--            </div>-->
<!--            <div class="status" v-html="getStatus(item)"></div>-->
<!--          </div>-->
<!--          <div class="det">-->
<!--            <div class="name">{{ item.title }}</div>-->
<!--            <div class="time">{{ item.createdAt }}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <loading :loading="loading" />-->
<!--      <empty v-if="!loading && projectList.length <= 0"></empty>-->
<!--      <a-pagination v-model:current="listQuery.page" :total="total" @change="loadData" style="text-align: center" />-->
<!--    </div>-->
<!--    <AddForm ref="addForm" />-->
<!--  </div>-->
</template>

<script lang="ts">
// import { defineComponent, ref, Ref, createVNode } from "vue"
// import { useRouter } from "vue-router"
// import api from "@/api"
// // import axios from "@/api/axios"
// import { FormListItem } from "@/api/form"
// import { FormOutlined, DeleteOutlined } from "@ant-design/icons-vue"
// // import ModalDialog from "@/components/ModalDialog"
// import HeaderBar from "@/components/HeaderBar/index.vue"
// import AddForm from "./AddForm.vue"
// import { Modal, message } from "ant-design-vue"
// import { ExclamationCircleOutlined, EyeOutlined, FileDoneOutlined } from "@ant-design/icons-vue"
// import { useLoadHook } from "@/hooks/useLoadHook"
// export default defineComponent({
//   name: "Home",
//   components: { FormOutlined, DeleteOutlined, EyeOutlined, FileDoneOutlined, HeaderBar, AddForm },
//   setup() {
//     // const projectList: Ref<FormListItem[]> = ref([])
//     const router = useRouter()
//     const addForm: Ref<typeof AddForm | null> = ref(null)
//     const { total, loading, list: projectList, listQuery, loadData } = useLoadHook<FormListItem>({ api: api.form.list })
//     loadData()
//     const toAdd = (data: FormListItem) => {
//       addForm?.value?.open({
//         data,
//         success: () => {
//           loadData()
//         }
//       })
//     }
//     const toDesign = (data: FormListItem): void => {
//       router.push({
//         path: "/design",
//         query: {
//           id: data.id
//         }
//       })
//     }
//     const toShow = (data: FormListItem): void => {
//       const loca = router.resolve({
//         path: "/show",
//         query: {
//           id: data.id
//         }
//       })
//       window.open(loca.href, "_blank")
//     }
//     const toDetail = (data: FormListItem): void => {
//       const loca = router.resolve({
//         path: "/detail",
//         query: {
//           id: data.id
//         }
//       })
//       window.open(loca.href, "_blank")
//     }
//     const remove = (data: FormListItem) => {
//       Modal.confirm({
//         title: "确定删除表单[" + data.title + "]吗？",
//         icon: createVNode(ExclamationCircleOutlined),
//         onOk() {
//           api.form.remove(data.id).then(() => {
//             message.success("删除成功")
//             loadData()
//           })
//         },
//         onCancel() {
//           console.log("Cancel")
//         }
//       })
//     }
//     const map = [
//       { value: 1, label: "待发布", color: "#2a82e4" },
//       { value: 2, label: "已发布", color: "#4caf50" },
//       { value: 3, label: "有修改", color: "#ff9600" }
//     ]
//     const getStatus = (data: FormListItem) => {
//       const cur = map.find((a) => a.value == data.status)
//       return (cur && `<span style="background-color: ${cur.color};">${cur.label}</span>`) || data.status
//     }
//     return { projectList, toAdd, toDesign, toShow, addForm, remove, getStatus, listQuery, loading, total, loadData, toDetail }
//   }
// })
</script>
<style scoped lang="scss">
.container {
  background: #f1f5f1;
  padding-bottom: 10px;
  .content {
    width: 1000px;
    background: #fff;
    margin: 10px auto 0;
    min-height: calc(100vh - 70px);
    padding: 30px;
    box-sizing: border-box;
    .filter-head {
      margin-bottom: 30px;
      .btn {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 25px;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      .btn-primary {
        background: #3b7b97;
        color: #fff;
      }
    }
    .tit-bar {
      margin-bottom: 20px;
      .title {
        border-left: 4px solid rgba(255, 141, 26, 1);
        padding-left: 10px;
      }
    }
    .project-list {
      overflow: hidden;
      .item {
        width: 220px;
        margin: 0 30px 30px 0;
        border-radius: 10px;
        border: 1px solid #eee;
        float: left;
        cursor: pointer;
        &:hover {
          .img {
            .btn-group {
              display: block;
            }
          }
        }
        .img {
          height: 220px;
          position: relative;
          .empimg {
            width: 80px;
            height: 80px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .btn-group {
            position: absolute;
            right: 0;
            top: 0;
            display: none;
          }
          .btn {
            width: 30px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            text-align: center;
            cursor: pointer;
            display: inline-block;
            &:hover {
              opacity: 0.7;
            }
            &:first-child {
              border-radius: 0 0 0 10px;
            }
            &:last-child {
              border-radius: 0 10px 0 0;
            }
          }
          .btn-preview {
            background: #9c27b0;
          }
          .btn-edit {
            background: #3f9dff;
          }
          .btn-remove {
            background: #ff7585;
          }
          .btn-detail {
            background: #12b25c;
          }
          .status {
            position: absolute;
            top: 0;
            left: 0;
            font-size: 12px;
            :deep(span) {
              background: #999;
              color: #fff;
              padding: 2px 8px;
              border-radius: 0 0 5px 5px;
              display: block;
            }
          }
        }
        .det {
          background: rgba(250, 250, 250, 1);
          padding: 10px;
          border-radius: 0 0 10px 10px;
          .name {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 5px;
          }
          .time {
            color: #999;
          }
        }
      }
    }
  }
}
</style>
