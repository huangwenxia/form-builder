import request, { BaseResponse } from "@/api/request"

export interface UserLoginParams {
  name: string
  password: string
}

export function login(opt: UserLoginParams): Promise<BaseResponse<string>> {
  return request<string>({
    url: "/system/user/login",
    method: "post",
    data: opt
  })
}
export function info(): Promise<BaseResponse<undefined>> {
  return request({
    url: "/system/user/info",
    method: "get"
  })
}
export function logout(): Promise<BaseResponse<undefined>> {
  return request({
    url: "/system/user/logout",
    method: "get"
  })
}
