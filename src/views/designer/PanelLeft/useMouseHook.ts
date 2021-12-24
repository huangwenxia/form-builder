import * as Utils from "@/utils"
import { MDefault } from "./MDefault"
import * as I from "@/api/interface"
import { message } from "ant-design-vue"
import $MController from "../MController";

interface DragEventType {
  startX: number
  startY: number
  startL: number
  startT: number
  eleX: number
  eleY: number
  cloneEle: HTMLElement | undefined
  isIn: boolean
  moduleType: string
  moduleIndex: number
}
const dragEvent: DragEventType = {
  startX: 0,
  startY: 0,
  startL: 0,
  startT: 0,
  cloneEle: undefined,
  moduleType: "",
  isIn: false,
  eleX: 0,
  eleY: 0,
  moduleIndex: 0
}

type ReturnType = {
  onMousedown: (e: MouseEvent) => void
}

const useMouseHook = (): ReturnType => {
  function onMousedown(e: MouseEvent): void {
    dragEvent.startX = e.pageX
    dragEvent.startY = e.pageY
    dragEvent.cloneEle = getCloneEle(e)

    const dragHears = document.querySelectorAll(".drag-hear") as NodeListOf<HTMLElement>
    for (let i = 0; i < dragHears.length; i++) {
      dragHears[i].style.display = "block"
    }
    //让最后一个空白module显示
    // document.querySelector(".module-empty").style.display = "block"

    document.addEventListener("mousemove", _onMousemove)
    document.addEventListener("mouseup", _onMouseup)
  }

  function getCloneEle(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement
    const info = target.getAttribute("data-info") || ""
    const infos = info.split("|")
    const icon = target.children[0].outerHTML
    const div = document.createElement("div")
    const position = Utils.getPosition(target)
    const scrollTop = document.documentElement.scrollTop
    div.setAttribute(`style`, `background:#fff;width:70px;height:63px;border-radius:3px;position:absolute;z-index:290;padding:5px 0;text-align:center;font-size:12px;opacity: .7;box-shadow: 0 0 5px rgba(0,0,0,.3);cursor:pointer;top:${position.top + scrollTop}px;left:${position.left}px`)
    div.innerHTML = `<div class="icon" style="font-size:30px;color:#999;line-height:1;margin-bottom:5px;vertical-align:top;">${icon}</div><div class="name">${infos[0]}</div>`
    document.body.appendChild(div)
    dragEvent.startL = position.left
    dragEvent.startT = position.top + scrollTop
    dragEvent.moduleType = infos[2]
    return div
  }
  function _onMousemove(e: MouseEvent) {
    e.preventDefault()
    if (dragEvent.cloneEle) {
      dragEvent.cloneEle.style.left = dragEvent.startL + e.pageX - dragEvent.startX + "px"
      dragEvent.cloneEle.style.top = dragEvent.startT + e.pageY - dragEvent.startY + "px"
    }
    const minL = document.body.clientWidth / 2 - 800 / 2
    const maxL = document.body.clientWidth / 2 + 800 / 2
    const dragHears = document.querySelectorAll(".drag-hear") as NodeListOf<HTMLElement>
    const modules = document.querySelectorAll(".module-control") as NodeListOf<HTMLElement>
    const scrollTop = 0 //document.documentElement.scrollTop
    dragEvent.moduleIndex = -1
    dragEvent.isIn = false
    if (e.pageX > minL && e.pageX < maxL) {
      for (let i = 0; i < modules.length; i++) {
        const posi = Utils.getPosition(modules[i])
        if (e.pageY + scrollTop >= posi.top && e.pageY + scrollTop <= posi.top + modules[i].offsetHeight) {
          dragHears[i].classList.add("active")
          dragEvent.moduleIndex = i
        } else {
          dragHears[i].classList.remove("active")
        }
      }
    }
  }
  function _onMouseup() {
    document.removeEventListener("mousemove", _onMousemove)
    document.removeEventListener("mouseup", _onMouseup)
    if (dragEvent.cloneEle) {
      document.body.removeChild(dragEvent.cloneEle)
    }
    const dragHears = document.querySelectorAll(".drag-hear") as NodeListOf<HTMLElement>
    for (let i = 0; i < dragHears.length; i++) {
      dragHears[i].classList.remove("active")
      dragHears[i].style.display = "none"
    }

    if (dragEvent.moduleIndex <= -1) {
      dragEvent.moduleIndex = $MController.modules.length
    }
    startAdd()
    //让最后一个空白module隐藏
    // document.querySelector(".module-empty").style.display = "none"
    // console.log('当前放入的模块是',dragEvent.moduleIndex)
    // console.log('当前拖拽类型',dragEvent.moduleType)
  }
  function startAdd() {
    const defaultModelData: I.designer.FormItemType | undefined = MDefault.find((a) => a.type == dragEvent.moduleType)
    if (!defaultModelData) {
      return message.info("模块未找到")
    }
    const data = Utils.deepCopy<I.designer.FormItemType>(defaultModelData)
    data.id = "module_" + Utils.uniqueId(6)
    toAdd(data)
    if (["image", "video"].indexOf(dragEvent.moduleType) > -1) {
      // FileService.show({
      //   fileType: dragEvent.moduleType,
      //   success: (src, file) => {
      //     data.elements[0].attrs.src = src
      //     if (file && file.width && file.height) {
      //       const h = file.height > 100 ? 100 : file.height
      //       const w = (h * file.width) / file.height
      //       data.elements[0].style.width = +parseFloat(w).toFixed(2)
      //       data.elements[0].style.height = +parseFloat(h).toFixed(2)
      //     }
      //     // data.elements[0].style.width="100px";
      //     this.toAdd(data)
      //   }
      // })
    } else {
      // this.toAdd(data)
    }
  }
  function toAdd(module: I.designer.FormItemType) {
    $MController.moduleAdd({ module, index: dragEvent.moduleIndex })
    dragEvent.moduleIndex = -1
  }

  return { onMousedown }
}
export default useMouseHook


