import { getAllDepartmentsAxios } from "@/api/axios/departmentAxios"
import Emitter from "@/classes/Emitter";
import type { DepartmentResponse } from "@/types/department-types";
import type { ApiResponse } from "@/types/payload-type";
import { useEffect } from "react";

const useDepartmentTableService = () => {
  const {data, refetch} = getAllDepartmentsAxios<ApiResponse<DepartmentResponse[]>>();

  useEffect(()=>{
    const unsubscribe = Emitter.addEmitter("REFRESH_DEPARTMENTS",refetch);

    return ()=> unsubscribe();
  },[])

  return{
    fetchedData: data?.data || []
  }
}

export default useDepartmentTableService