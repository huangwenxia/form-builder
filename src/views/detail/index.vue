<template>
    <div class="container">
        <HeaderBar />
        <div class="sub-header">
            <div class="title">{{ detail?.title }}</div>
            <ul class="tabs">
                <li class="active">列表视图</li>
                <!-- <li>统计视图</li> -->
            </ul>
        </div>
        <div class="panel-center">
            <div class="wrapper">
                <ListView :detail="detail" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, Ref, computed } from "vue"
// import * as Utils from "@/utils"
import api from "@/api"
import * as I from "@/api/interface"
import { SaveParams } from "@/api/form/answer"
import { useRoute } from "vue-router"
import { message } from "ant-design-vue"
import HeaderBar from "@/components/HeaderBar/index.vue"
import ListView from "./ListView.vue"

interface Props {
    mode?: string
}

const props = withDefaults(defineProps<Props>(), {
    mode: ""
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
    console.log("form", form.value)
    if (detail.value?.id) {
        api.form.answer.save(detail.value?.id, form.value).then(() => {
            message.success("提交成功")
        })
    }
}
</script>

<style scoped lang="scss">
.container {
    min-height: 100vh;
    background: #f1f5f1;

    .sub-header {
        padding: 0 20px;
        line-height: 40px;
        background: #fff;
        border-top: 1px solid #eee;
        position: relative;

        .tabs {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;

            li {
                height: 40px;
                line-height: 40px;
                float: left;
                list-style: none;
                padding: 0 20px;
                cursor: pointer;

                &.active {
                    background: #f1f5f1;
                    color: #ff9600;
                }
            }
        }
    }
}

.panel-center {
    padding: 20px 0;

    .wrapper {
        background: rgba(255, 255, 255, 0.9);
        min-height: 200px;
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
