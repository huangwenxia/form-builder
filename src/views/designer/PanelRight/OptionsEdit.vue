<template>
    <div class="options">
        <div class="list">
            <div class="item" v-for="(item, i) in options" :key="i">
                <div class="btn move-handle">
                    <SwapOutlined :style="moveIconStyle" />
                </div>
                <div class="btn set-default" title="设为默认值" @click="setDefault(item)">
                    <CheckOutlined :style="checkStyle(item)" />
                </div>
                <input class="txt" v-model="item.value" @input="onInputChange(item)" />
                <div class="delete" @click="deleteItem(i)">
                    <CloseCircleOutlined />
                </div>
            </div>
        </div>
        <a-button class="btn-add" @click="addItem">添加选项</a-button>
    </div>
</template>
<script lang="ts">
import { CloseCircleOutlined, CheckOutlined, SwapOutlined } from "@ant-design/icons-vue"

export default {
    components: { CloseCircleOutlined, CheckOutlined, SwapOutlined }
}
</script>
<script lang="ts" setup>
import { inject, ref } from "vue"
import * as I from "@/api/interface"
import { MC } from "@/views/designer/MController"
import { OptionData } from "ant-design-vue/es/vc-select/interface"

const $MController = inject("$MController") as MC

interface Props {
    options: I.designer.Options
    data: I.designer.FormItemType
}

const props = withDefaults(defineProps<Props>(), {
    options: () => [],
    data: () => ({} as I.designer.FormItemType)
})

const moveIconStyle = ref({ transform: "rotate(90deg)" })
const onInputChange = (data: OptionData) => {
    data.label = data.value
}
const setDefault = (data: OptionData) => {
    // const moduleData = props.data as ModuleType
    let defaultValue: string | string[] | undefined = props.data.defaultValue
    const value = data.value as string
    const index = defaultValue ? defaultValue.indexOf(value) : -1
    if (index > -1) {
        if (defaultValue instanceof Array) {
            defaultValue.splice(index, 1)
        } else {
            defaultValue = ""
        }
    } else {
        if (defaultValue instanceof Array) {
            defaultValue.push(value)
        } else {
            defaultValue = value
        }
    }
    $MController.moduleUpdate({ id: props.data.id, key: "defaultValue", value: defaultValue })
}
const checkStyle = (data: OptionData) => {
    const defaultValue = props.data.defaultValue instanceof Array ? props.data.defaultValue.join(",") : props.data.defaultValue
    if (defaultValue && defaultValue.indexOf(data.value + "") > -1) {
        return { color: "red" }
    }
    return ""
}
const deleteItem = (i: number) => {
    const options = props.data.options || []
    options.splice(i, 1)
}
const addItem = () => {
    const options = props.data.options || []
    let maxNumber = 0
    options.map((cur) => {
        const value = cur.value as string
        const result: RegExpMatchArray | null = value.match(/\d+/)
        if (result && parseInt(result[0]) > maxNumber) {
            maxNumber = +result[0]
        }
    })
    maxNumber++
    options.push({
        label: "选项" + maxNumber,
        value: "选项" + maxNumber
    })
}
</script>

<style lang="scss" scoped>
.options {
    .list {
        .item {
            position: relative;
            margin-bottom: 5px;

            &:hover {
                background: #f8f8f8;

                .delete {
                    display: block;
                }
            }

            &:after {
                content: "";
                display: block;
                clear: both;
            }

            .btn {
                float: left;
                width: 20px;
                height: 30px;
                color: #aaa;
                cursor: pointer;

                &.active {
                    color: cornflowerblue;
                }
            }

            .delete {
                position: absolute;
                right: 0;
                top: 3px;
                cursor: pointer;
                color: red;
                display: none;
            }

            .txt {
                border: 0;
                outline: none;
                border-bottom: 1px solid #ddd;
                width: 200px;
                background: none;
            }
        }
    }

    .btn-add {
        width: 100%;
    }
}
</style>
