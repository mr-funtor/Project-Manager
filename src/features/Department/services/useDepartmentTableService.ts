import { getAllTransactionsAxios } from "@/api/axios/departmentAxios"
import type { DepartmentResponse } from "@/types/department-types";
import type { ApiResponse } from "@/types/payload-type";

const useDepartmentTableService = () => {
  const {data} = getAllTransactionsAxios<ApiResponse<DepartmentResponse[]>>();



  return{
    fetchedData: data?.data || []
  }
}

export default useDepartmentTableService