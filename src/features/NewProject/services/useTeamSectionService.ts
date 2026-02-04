import { useEffect, useReducer } from "react";
import { useGetAllTeamMembersAxios } from "@/api/queries/teamAxios";
import type { TeamMemberType } from "@/types/team-types";
import type { StateUnion } from "@/types/other-types";
import { isAxiosError } from "axios";
import { ToastInit } from "@/components/shared/CustomToast";

const initialState = {
  developers: [] as TeamMemberType[],
  managers: [] as {key:string, value: string | number}[],
}

type DispatchType = StateUnion<typeof initialState>

const useTeamSectionService = () => {
   const [state, dispatch] = useReducer((oldValues, newValues:DispatchType)=>({...oldValues, ...newValues}), initialState)
  const { data, isError, isLoading, error } = useGetAllTeamMembersAxios<TeamMemberType[]>();

  if(isError && !isLoading){
    if (isAxiosError(error)) {
      const theError = error;

      if (theError.response && theError.response.data) {
        ToastInit.openToast(
          theError?.response?.data?.errors[0] || theError?.response?.data?.message || "Could not fetch team members",
          "error"
        );
      } else {
        ToastInit.openToast("Could not fetch team members","error")
      }
    } else {
      ToastInit.openToast("Could not fetch team members","error")
    }
  }

  useEffect(()=>{
    const developers = data?.data.filter((tMember)=> tMember.role === "Developer");


    const managers = data?.data.filter((tMember)=> tMember.role === "Manager")
      .map((tm)=>({key:tm.fullName, value: tm.id}));;

    dispatch({developers:developers? developers : []})
    dispatch({managers:managers ? managers : []})
  },[data])

  return{
    state
  }
}

export default useTeamSectionService