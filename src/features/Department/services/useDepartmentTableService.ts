
import { useGetAllDepartmentsAxios } from "@/api/queries/departmentAxios";
import type { DepartmentResponse } from "@/types/department-types";
import type { ApiResponse } from "@/types/payload-type";

const useDepartmentTableService = () => {
  const { data } = useGetAllDepartmentsAxios<ApiResponse<DepartmentResponse[]>>();

  return{
    fetchedData: data?.data || []
  }
}

export default useDepartmentTableService