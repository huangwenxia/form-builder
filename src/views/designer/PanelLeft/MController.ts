import modules from "@/views/designer/PanelLeft/Modules.vue";
import * as I from "@/api/interface"
interface Preload {
    module: I.designer.FormItemType
    index: number
}
export interface MC {
    modules: Array<I.designer.FormItemType>
    moduleAdd:(preload:Preload)=>void
    moduleRemove:(id:string)=>void
}
class MController{
    modules: Array<I.designer.FormItemType>;
    constructor(modules:Array<I.designer.FormItemType>) {
        this.modules = modules as Array<I.designer.FormItemType> || []
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
}
const $MController =  (modules:Array<I.designer.FormItemType>) :MC=>{
     return new MController(modules);
}
export default $MController