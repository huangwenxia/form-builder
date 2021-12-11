import { AxiosRequestConfig } from "axios"
import service from "./axios"

export interface BaseResponse<T> {
  status: number
  result: T
  message?: string
}
export interface ListPageType<T> {
  rows: Array<T>
  count: number
}
export type ResponseType<T> = Promise<BaseResponse<T>>

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

export default request
