import { useEffect, useReducer } from "react";
import Emitter from "@/classes/Emitter";

// Api/Data
import { createDepartmentAxios } from "@/api/axios/departmentAxios";

// components
import { LoaderInit } from "@/components/shared/CustomLoader";
import { ToastInit } from "@/components/shared/CustomToast";

// types
import type { CreateDepartmentPayloadType } from "@/types/department-types";
import type { StateUnion } from "@/types/other-types";

const initialState = {
  isCreatingNewDepartment: false,
  departmentName : "",
}

type DispatchType = StateUnion<typeof initialState>

const useDepartmentFeatureService = () => {
  const [state, dispatch] = useReducer((oldValues, newValues:DispatchType)=>({...oldValues, ...newValues}), initialState)
  const { mutate, isPending } = createDepartmentAxios<CreateDepartmentPayloadType>();

  function createNewDepartment (){
    const payload = {
      name: state.departmentName
    }

    mutate(payload,{
      onSuccess:()=>{
        ToastInit.openToast("Department created successfully");
        dispatch({isCreatingNewDepartment: false});
        Emitter.dispatchEmitter("REFRESH_DEPARTMENTS")
      },
      onError:()=>{
        ToastInit.openToast("Department created failed","error")
      }
    })
  }

  useEffect(()=>{
    if(isPending){
      LoaderInit.triggerLoader()
    }else{
      LoaderInit.closeLoader();
    }
  },[isPending])
  
  return{
    state, dispatch,createNewDepartment
  }
}

export default useDepartmentFeatureService;