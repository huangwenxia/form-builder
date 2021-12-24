import * as I from "@/api/interface"
interface Preload {
    module: I.designer.FormItemType
    index: number
}
type UpdatePropType = {
    id: string
    key: string
    value: string | undefined | string[] | []
}
export interface MC {
    currentModuleId:string
    modules: Array<I.designer.FormItemType>
    moduleInit:(modules:Array<I.designer.FormItemType>)=>void
    moduleAdd:(preload:Preload)=>void
    moduleRemove:(id:string)=>void
    moduleUp:(id:string)=>void
    moduleDown:(id:string)=>void
    moduleUpdate:({ id, key, value }: UpdatePropType)=>void
    setCurrent:(id:string)=>void
    getCurrentModule:()=>I.designer.FormItemType | null
    getModuleList:() => Array<I.designer.FormItemType>
}
class MController{
    modules: Array<I.designer.FormItemType>;
    currentModuleId: string;
    constructor() {
        this.modules = [] as Array<I.designer.FormItemType>
        this.currentModuleId = "";
    }

    moduleInit(modules:Array<I.designer.FormItemType>){
        this.modules = modules
    }
    moduleAdd(preload:Preload){
        this.modules.splice(preload.index, 0, preload.module)
    }
    moduleRemove(id:string){
        const index = this.modules.findIndex((a) => a.id == id)
        if (index > -1) {
            this.modules.splice(index, 1)
        }
    }
    moduleUp( id: string){
        const currentIndex = this.modules.findIndex((a) => a.id == id)
        if (currentIndex > 0) {
            const changeIndex: number = currentIndex - 1
            const current = this.modules[currentIndex]
            this.modules[currentIndex] = this.modules[changeIndex]
            this.modules[changeIndex] = current
        }
    }
    moduleDown( id: string){
        const currentIndex = this.modules.findIndex((a) => a.id == id)
        if (currentIndex < this.modules.length - 1) {
            const changeIndex: number = currentIndex + 1
            const current = this.modules[currentIndex]
            this.modules[currentIndex] = this.modules[changeIndex]
            this.modules[changeIndex] = current
        }
    }
    moduleUpdate( { id, key, value }: UpdatePropType) {
        const current: I.designer.FormItemType | undefined = this.modules.find((a) => a.id == id)
        if (current) {
            current[key] = value
        }
    }
    setCurrent( id: string){
        this.currentModuleId = id
    }
    getCurrentModule(){
        return this.modules.find((module:I.designer.FormItemType) => module.id === this.currentModuleId) as I.designer.FormItemType | null
    }
    getModuleList(){
        return this.modules;
    }
}
const $MController = new MController();
export default $MController