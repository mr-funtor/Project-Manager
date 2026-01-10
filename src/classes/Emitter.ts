import { ToastInit } from "@/components/shared/CustomToast";


class EmitterMaker{
  private allEmitters: Record<string, ()=>void> = {}

  addEmitter(key:string, emitFunction:()=>void){
    if(key in this.allEmitters){
      ToastInit.openToast("Key already exist in emitter")
    };

    if(!this.allEmitters[key]) this.allEmitters[key] = emitFunction;

    return ()=>{
      this.unsubscribe(key)
    }
  }

  dispatchEmitter(key:string){
    if(!this.allEmitters[key]){
      return ToastInit.openToast(`Key ${key} does not exist in Emitter`)
    };

    this.allEmitters[key]();
  }

  unsubscribe(key: string){
    if(!this.allEmitters[key])return;

    delete this.allEmitters[key] ;
  }
}

const Emitter = new EmitterMaker();

export default Emitter;