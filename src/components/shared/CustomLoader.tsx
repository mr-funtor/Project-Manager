
import { useEffect, useState } from "react";


const CustomLoader=()=>{
  const [isLoaderShowing, setIsLoaderShowing] = useState(false);

  function showLoader(){
    setIsLoaderShowing(true);
  }

  function closeLoader(){
    setIsLoaderShowing(false)
  }


  useEffect(()=>{
    LoaderInit.subscribe(showLoader,closeLoader);
  },[])

  return(
    <div  className={`fixed inset-0 h-full w-full bg-[rgba(0,0,0,0.7)]
     justify-center items-center z-20 ${isLoaderShowing ? "flex " : "hidden"}`}data-testid="screen-loader">
      {/* <img 
        src={KeystoneLogoRound} 
        alt="keystone bank loading logo"
        className="h-14 animate-spin"
      /> */}
    </div>
  )
}

export default CustomLoader;

class LoaderObservable{
  private triggerCallback: ()=>void;//shows the loader
  private closingCallback: ()=>void;// closes the loader

  constructor(){
    this.triggerCallback= ()=>null;
    this.closingCallback= ()=>null;
  }

  subscribe(callback1:()=>void, callback2:()=>void){
    this.triggerCallback=callback1;
    this.closingCallback= callback2;
  }

  triggerLoader(){
    this.triggerCallback();
  }

  closeLoader(){
    this.closingCallback();
  }

}

export const LoaderInit = new LoaderObservable();