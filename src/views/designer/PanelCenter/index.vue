<template>
    <div class="panel-center" :style="content?.skin.containerStyle">
        <div class="wrapper">
            <div class="head" :style="content?.skin.headerStyle">
                <div class="title">{{ detail?.title }}</div>
                <div class="desc">{{ detail?.desc }}</div>
            </div>
            <div class="content">
                <div class="form">
                    <ItemControl v-for="(item, index) in modules" :key="index" :data="item" :isEmpty="false">
                        <div class="form-item">
                            <div class="title">
                                <div class="tit">{{ item.label }}<span v-if="item.required" style="color: red">*</span></div>
                                <div class="txt">{{ item.desc }}</div>
                            </div>
                            <div class="det">
                                <div class="component">
                                    <FromItem :data="item" v-model="form[item.id]" :form="form" />
                                </div>
                            </div>
                        </div>
                    </ItemControl>
                    <ItemControl :isEmpty="true">
                        <div class="form-item">
                            <div class="empty">请从左侧点击或拖拽组件</div>
                        </div>
                    </ItemControl>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, watchEffect } from "vue"
import FromItem from "@/components/FormItem/index.vue"
import ItemControl from "./ItemControl.vue"
import * as I from "@/api/interface"

interface Props {
    content: I.designer.ContentType | null
    detail: I.designer.FormDetailType
}

interface Form {
    [key: string]: undefined | string | []
}

const props = withDefaults(defineProps<Props>(), {
    content: () => ({} as I.designer.ContentType),
    detail: () => ({} as I.designer.FormDetailType)
})
const form = reactive({} as Form)

const modules = computed(() => {
    const mds = (props.content && props.content.modules) || []
    mds.map((data) => {
        if (!form[data["id"]]) {
            //初始值
            form[data["id"]] = data.defaultValue || ""
        }
    })
    return mds
})
</script>

<style lang="scss" scoped>
.panel-center {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    min-height: calc(100vh - 50px);
    background: #f1f5f1;
    padding: 10px 0;

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
                    pointer-events: none;

                    .title {
                        margin-bottom: 10px;

                        .tit {
                        }

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
</style>
