import { useEffect, useReducer } from "react";

// Api/Data
import { useCreateDepartmentAxios } from "@/api/queries/departmentAxios";


// components
import { LoaderInit } from "@/components/shared/CustomLoader";
import { ToastInit } from "@/components/shared/CustomToast";

// types
import type { StateUnion } from "@/types/other-types";
import type { CreateDepartmentPayloadType } from "@/types/department-types";
import { isAxiosError } from "axios";

const initialState = {
  isCreatingNewDepartment: false,
  departmentName : "",
}

type DispatchType = StateUnion<typeof initialState>

const useDepartmentFeatureService = () => {
  const [state, dispatch] = useReducer((oldValues, newValues:DispatchType)=>({...oldValues, ...newValues}), initialState)
  const { mutate, isPending } = useCreateDepartmentAxios<CreateDepartmentPayloadType, CreateDepartmentPayloadType>();

  function createNewDepartment (){
    const payload = {
      name: state.departmentName
    }

    mutate(payload,{
      onSuccess:()=>{
        ToastInit.openToast("Department created successfully");
        dispatch({isCreatingNewDepartment: false});
      },
      onError:(error)=>{
        if (isAxiosError(error)) {
          const theError = error;
  
          if (theError.response && theError.response.data) {
            ToastInit.openToast(
              theError?.response?.data?.errors[0] || theError?.response?.data?.message || "Department creation failed",
              "error"
            );
          } else {
            ToastInit.openToast("Department creation failed","error")
          }
        } else {
          ToastInit.openToast("Department creation failed","error")
        }
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