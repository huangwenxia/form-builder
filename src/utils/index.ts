/**
 * @description     公共方法
 *
 * @author
 * @email
 * @phone
 * @create          2019-02-13 11:00
 * */

/* eslint-disable */
export function dateFormat(time: any, format?: string) {
  if (arguments.length === 0) {
    return null
  }
  if (!time) {
    return null
  }
  let fmt = format || "yyyy-MM-dd hh:mm:ss"
  let date: Date
  if (typeof time === "object") {
    date = time as Date
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }

  const o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  } as { [key: string]: number }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  for (const k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] + "" : ("00" + o[k]).substr(("" + o[k]).length))
  return fmt
}
/**
 * @description     获取当前url参数
 *
 * @param       { key:String }         key为需要获取的参数
 * @return      { String }             必反，返回对应参数的值
 *
 * */
export function getQueryString(key: string) {
  const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i")
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURI(r[2])
  }
  return ""
}

/**
 * @description     对象深拷贝
 *
 * @param       { source:Object }         source为需要拷贝的源对象
 * @return      { Object }                返回拷贝后的新的对象
 *
 * */
export function deepCopy<T extends Array<T> | any>(sourceData: T): T {
  if (Array.isArray(sourceData)) {
    return sourceData.map((item) => deepCopy(item)) as T
  }
  if (typeof sourceData !== "object" || sourceData === null) {
    return sourceData
  }
  const obj: T = {} as T
  for (let key in sourceData) {
    if (typeof sourceData[key] === "object" && sourceData[key] !== null) {
      obj[key] = deepCopy(sourceData[key])
    } else {
      obj[key] = sourceData[key]
    }
  }
  return obj
}

/**
 * 生成一个用不重复的ID
 */
export function uniqueId(randomLength: number | undefined) {
  return Number(Math.random().toString().substr(3, 6) + Date.now())
    .toString(36)
    .substr(0, randomLength)
}

/**
 * 获取一个dom节点的绝对定位，相对于整个document
 */
export function getPosition(dom: HTMLElement) {
  var t = dom.offsetTop,
    l = dom.offsetLeft
  let obj: HTMLElement = dom
  //从目标元素开始向外遍历，累加top和left值
  while (obj.offsetParent) {
    obj = obj.offsetParent as HTMLElement
    t += obj.offsetTop
    l += obj.offsetLeft
  }
  return {
    left: l,
    top: t
  }
}
export function styleToString(style: any): string {
  if (style == null || style == undefined) return ""
  return Object.keys(style)
    .map((a) => {
      var value = style[a]
      if (
        [
          "fontSize",
          "borderRadius",
          "width",
          "height",
          "right",
          "lineHeight",
          "top",
          "left",
          "marginBottom",
          "marginTop",
          "marginLeft",
          "marginRight",
          "paddingBottom",
          "paddingTop",
          "paddingLeft",
          "paddingRight",
          "borderTopWidth",
          "borderRightWidth",
          "borderBottomWidth",
          "borderLeftWidth",
          "borderBottomRightRadius",
          "borderTopLeftRadius",
          "borderBottomLeftRadius",
          "borderTopRightRadius"
        ].indexOf(a) > -1
      ) {
        value = +parseFloat(value).toFixed(2) + "px"
      }
      return a.replace(/([A-Z])/g, "-$1".toLocaleLowerCase()).toLocaleLowerCase() + ":" + value
    })
    .join(";")
}
export function copy(value: string): void {
  const oInput = document.createElement("input")
  // input框的内容复制
  oInput.value = value
  document.body.appendChild(oInput)
  // 选中
  oInput.select() // 选择对象;
  // 调 自带的Copy方法
  document.execCommand("Copy") // 执行浏览器复制命令
  // 复制成功后 移出 input节点
  oInput.remove()
}
// import mitt from "mitt"
// export const bus = mitt()
/* eslint-enable */
