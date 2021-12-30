<template>
    <a-table :dataSource="list" :columns="columns" rowKey="id">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key == 'creator'">
                <span v-if="record.user">{{ record.user.name || record.user.username }}</span>
                <span v-else>游客</span>
            </template>
            <template v-if="column.key == 'action'">
                <a-button @click="openDetail(record)">详情</a-button>
            </template>
        </template>
    </a-table>
    <a-drawer title="反馈详情" placement="right" :closable="false" v-model:visible="visible" :width="600">
        <div class="list">
            <div class="item" v-for="(item, i) in currentData" :key="i">
                <div class="label">{{ i + 1 }}.{{ item.label }}</div>
                <div class="det">{{ item.value }}</div>
            </div>
        </div>
    </a-drawer>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue"
import api from "@/api"
import { AnswerListItem } from "@/api/form/answer"
import { useLoadHook } from "@/hooks/useLoadHook"
import { useRoute } from "vue-router"
import * as I from "@/api/interface"

interface Props {
    detail: I.designer.FormDetailType
}

type DataType = {
    label: string
    value: any
}
type CurrentDataType = Array<DataType> | undefined
const props = withDefaults(defineProps<Props>(), {
    detail: () => ({} as I.designer.FormDetailType)
})
const route = useRoute()
const { total, loading, list, listQuery, loadData } = useLoadHook<AnswerListItem>({
    api: api.form.answer.list,
    params: { formId: route.query.id }
})
const columns = ref([
    { title: "提交时间", dataIndex: "createdAt", key: "createdAt" },
    { title: "提交人", key: "creator" },
    { title: "提交Ip", dataIndex: "ip", key: "ip" },
    { title: "操作", key: "action" }
])
loadData()

const visible = ref(false)
const currentData: Ref<CurrentDataType> = ref([])
const openDetail = (data: AnswerListItem) => {
    const detail = props.detail
    const content = JSON.parse(data.content)
    currentData.value = detail?.content?.modules.map((a: I.designer.FormItemType) => {
        let val = ""
        if (content[a.id] instanceof Array) {
            val = content[a.id].join(",")
        } else {
            val = content[a.id]
        }
        return {
            label: a.label,
            value: val
        }
    })
    // console.log("currentData.value", currentData.value)
    visible.value = true
}
</script>
<style lang="scss" scoped>
.list {
    .item {
        margin-bottom: 10px;

        .det {
            margin-left: 15px;
        }
    }
}
</style>
