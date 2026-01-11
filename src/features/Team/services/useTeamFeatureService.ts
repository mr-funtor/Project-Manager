import { useCreateTeamMemberAxios } from "@/api/queries/teamAxios"
import { LoaderInit } from "@/components/shared/CustomLoader";
import { ToastInit } from "@/components/shared/CustomToast";
import type { StateUnion } from "@/types/other-types";
import type { CreateTeamMemberType } from "@/types/team-types";
import { isAxiosError } from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  isModalOpen: false,
}

type DispatchType = StateUnion<typeof initialState>

const useTeamFeatureService = () => {
  const [state, dispatch] = useReducer((oldValues, newValues:DispatchType)=>({...oldValues, ...newValues}), initialState)
  const {mutate , isPending} = useCreateTeamMemberAxios();

  function createNewTeamMember(values: CreateTeamMemberType){
    dispatch({isModalOpen: false});
    

    mutate(values,{
      onSuccess:()=>{
        ToastInit.openToast("Team created successfully");
      },
      onError:(error)=>{
        if(isAxiosError(error)){
          const theError = error;
            
          if (theError.response && theError.response.data) {
            ToastInit.openToast(
              theError?.response?.data?.errors[0] || theError?.response?.data?.message || "Department created failed",
              "error"
            );
          } else {
            ToastInit.openToast("Team Member creation failed","error")
          }
        }else{
          ToastInit.openToast("Team Member creation failed","error")
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
    createNewTeamMember,
    state, dispatch
  }
}

export default useTeamFeatureService

