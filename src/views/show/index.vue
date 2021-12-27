<template>
  <div class="panel-center" :style="detail?.content.skin.containerStyle">
    <div class="wrapper">
      <div class="head" :style="detail?.content.skin.headerStyle">
        <div class="title">{{ detail?.title }}</div>
        <div class="desc">{{ detail?.desc }}</div>
      </div>
      <div class="content">
        <div class="form">
          <div class="form-item" v-for="(item, i) in modules" :key="i">
            <div class="title">
              <div class="tit">{{ item.label }}<span style="color: red" v-if="item.required">*</span></div>
              <div class="txt">{{ item.desc }}</div>
            </div>
            <div class="det">
              <div class="component">
                <FormItem :data="item" v-model="form[item.id]" />
              </div>
            </div>
          </div>
          <loading msg="正在努力加载中，请稍后" :loading="loading" />
          <div class="btn-area" v-if="!loading">
            <a-button type="primary" size="large" @click="save">提 交</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--<script lang="ts">-->
<!--import {ref, Ref, computed,defineComponent } from "vue"-->
<!--import * as I from "@/api/interface"-->
<!--import api from "@/api"-->
<!--import { SaveParams } from "@/api/form/answer"-->
<!--import { useRoute } from "vue-router"-->
<!--import { message } from "ant-design-vue"-->
<!--import FormItem from "@/components/FormItem/Show.vue"-->
<!--interface Props{-->
<!--  mode:string-->
<!--}-->
<!--const Props={-->
<!--  mode:{-->
<!--    type:String,-->
<!--    default:""-->
<!--  }-->
<!--}-->
<!--// const props = withDefaults(defineProps<Props>(),{-->
<!--//   mode:''-->
<!--// })-->
<!--export default defineComponent({-->
<!--  components:{FormItem},-->
<!--  props: Props,-->
<!--  setup(props){-->
<!--    const route = useRoute()-->
<!--    const detail: Ref<I.designer.FormDetailType | null> = ref(null)-->
<!--    const modules = computed(() => detail.value?.content?.modules || [])-->
<!--    const form: Ref<SaveParams> = ref({})-->
<!--    const loading = ref(false)-->
<!--    const getData = () => {-->
<!--      const id = route.query.id || 0-->
<!--      loading.value = true-->
<!--      api.form-->
<!--          .detail(+id)-->
<!--          .then((res) => {-->
<!--            let content: I.designer.ContentType | null-->
<!--            try {-->
<!--              content = JSON.parse(res.result.publishContent || "")-->
<!--            } catch (e) {-->
<!--              content = null-->
<!--            }-->
<!--            if (content === null) {-->
<!--              content = {-->
<!--                skin: {-->
<!--                  containerStyle: {},-->
<!--                  headerStyle: {}-->
<!--                },-->
<!--                modules: []-->
<!--              }-->
<!--            }-->
<!--            detail.value = { ...res.result, content }-->

<!--            for (let i in content.modules) {-->
<!--              const module = content.modules[i]-->
<!--              form.value[module.id] = module.defaultValue || ""-->
<!--            }-->
<!--            console.log("form", form.value)-->
<!--          })-->
<!--          .finally(() => {-->
<!--            loading.value = false-->
<!--          })-->
<!--    }-->
<!--    getData()-->
<!--    const save = () => {-->
<!--      if (props.mode == "preview") {-->
<!--        message.info("当前处于预览模式，无法提交")-->
<!--        return-->
<!--      }-->
<!--      if (detail.value?.id) {-->
<!--        api.form.answer.save(detail.value?.id, form.value).then(() => {-->
<!--          message.success("提交成功")-->
<!--        })-->
<!--      }-->
<!--    }-->
<!--    return{-->
<!--      detail,-->
<!--      form,-->
<!--      modules,-->
<!--      loading,-->
<!--      save-->
<!--    }-->
<!--  }-->

<!--})-->
<!--</script>-->
<script lang="ts" setup>
import {ref, Ref, computed } from "vue"
import * as I from "@/api/interface"
import api from "@/api"
import { SaveParams } from "@/api/form/answer"
import { useRoute } from "vue-router"
import { message } from "ant-design-vue"
import FormItem from "@/components/FormItem/index.vue"
interface Props{
  mode:string
}
const props = withDefaults(defineProps<Props>(),{
  mode:''
})

const route = useRoute()
const detail: Ref<I.designer.FormDetailType | null> = ref(null)
const modules = computed(() => detail.value?.content?.modules || [])
const form: Ref<SaveParams> = ref({})
const loading = ref(false)
const getData = () => {
  const id = route.query.id || 0
  loading.value = true
  api.form
      .detail(+id)
      .then((res) => {
        let content: I.designer.ContentType | null
        try {
          content = JSON.parse(res.result.publishContent || "")
        } catch (e) {
          content = null
        }
        if (content === null) {
          content = {
            skin: {
              containerStyle: {},
              headerStyle: {}
            },
            modules: []
          }
        }
        detail.value = { ...res.result, content }

        for (let i in content.modules) {
          const module = content.modules[i]
          form.value[module.id] = module.defaultValue || ""
        }
        console.log("form", form.value)
      })
      .finally(() => {
        loading.value = false
      })
}
getData()
const save = () => {
  if (props.mode == "preview") {
    message.info("当前处于预览模式，无法提交")
    return
  }
  if (detail.value?.id) {
    api.form.answer.save(detail.value?.id, form.value).then(() => {
      message.success("提交成功")
    })
  }
}
</script>

<style scoped lang="scss">
.panel-center {
  min-height: calc(100vh);
  background: #f1f5f1;
  padding: 20px 0;
  .wrapper {
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
    .content {
      .form {
        .form-item {
          padding: 12px 30px;
          .title {
            margin-bottom: 10px;
            .txt {
              color: #999;
            }
          }
          .det {
            padding-left: 10px;
            .component {
              width: 80%;
            }
          }
          .empty {
            text-align: center;
            padding: 30px 0;
            color: #999;
          }
        }
      }
    }
  }
}
.btn-area {
  padding: 30px 0;
  text-align: center;
}
</style>
