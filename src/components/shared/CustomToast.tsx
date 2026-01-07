import { useEffect, useState } from "react"

const CustomToast = ()=> {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToasMessage] = useState("");
  const [messageVariant, setMessageVariant] = useState<"error" | "success">();

  function showTheToast(message:string, messageVariant?: "error" | "success"){
    setToasMessage(message)
    setMessageVariant(messageVariant || "success");
    setIsToastOpen(true);
    setTimeout(()=>setIsToastOpen(false),3000)
  }

  useEffect(()=>{
    ToastInit.subscribe(showTheToast)

  },[ToastInit])

  return(
    <div className={`p-4 fixed top-5 right-0 w-[20rem] min-h-10 flex justify-center items-center ${messageVariant === "success" ? "bg-green-500" : "bg-red-600"} z-40 ${isToastOpen ? "block" : "hidden"} rounded-l-lg`}>
      <p className={`${messageVariant === "error" && "text-white" }`}>{toastMessage}</p>
    </div>
  )
}

export default CustomToast


// TOAST OBSERVABLE
type messageType = "success" | "error"

class ToastObservable{
  private openAction: (message: string, messageVariant?: messageType)=>void = ()=>null;


  subscribe(subscriptionAction:(message: string, messageVariant?: messageType)=>void){
    this.openAction = subscriptionAction;
  }

  
  openToast(message:string, messageVariant?:messageType){
    this.openAction(message, messageVariant)
  }
}

export const ToastInit = new ToastObservable();

