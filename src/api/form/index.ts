import request, { BaseResponse, ListPageType } from "@/api/request"

export interface FormListItem {
  id: number
  title: string
  desc: string
  status: number
  content: string
  publishContent?: string
  viewCount: number
  cover: string
  creator: number
  createdAt: string
  updatedAt: string
}

//保存
export function save(opt: UpdateParams): Promise<BaseResponse<undefined>> {
  return request<undefined>({
    url: "/form/save",
    method: "post",
    data: opt
  })
}
//修改
export interface UpdateParams {
  id?: number
  title: string | undefined
  desc?: string
  content: string
  cover?: string
}
export function update(opt: UpdateParams): Promise<BaseResponse<undefined>> {
  const { id, ...params } = opt
  return request<undefined>({
    url: "/form/update/" + id,
    method: "post",
    data: params
  })
}
//列表
export interface ListQueryType {
  page: number
  pageSize: number
}
export function list(params?: ListQueryType): Promise<BaseResponse<ListPageType<FormListItem>>> {
  return request<ListPageType<FormListItem>>({
    url: "/form/list",
    method: "get",
    params
  })
}
//删除
export function remove(id: number): Promise<BaseResponse<undefined>> {
  return request<undefined>({
    url: "/form/" + id,
    method: "delete"
  })
}
//详情
export function detail(id: number): Promise<BaseResponse<FormListItem>> {
  return request<FormListItem>({
    url: "/form/" + id,
    method: "get"
  })
}
//发布
export function publish(id: number): Promise<BaseResponse<undefined>> {
  return request<undefined>({
    url: "/form/publish/" + id,
    method: "post"
  })
}

import answer from "./answer"
export default { save, list, update, remove, detail, publish, answer }
