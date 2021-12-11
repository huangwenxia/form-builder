import request, { BaseResponse, ListPageType } from "@/api/request"
export interface AnswerListItem {
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
export interface SaveParams {
  [key: string]: string | string[]
}
//保存
export function save(formId: number, opt: SaveParams): Promise<BaseResponse<undefined>> {
  return request<undefined>({
    url: "/form/answer/save/" + formId,
    method: "post",
    data: opt
  })
}

//列表
export interface ListQueryType {
  page?: number
  pageSize?: number
  formId?: number
}
export function list(params: ListQueryType): Promise<BaseResponse<ListPageType<AnswerListItem>>> {
  return request<ListPageType<AnswerListItem>>({
    url: "/form/answer/list",
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

export default { save, list, remove }
