
import { useGetAllDepartmentsAxios } from "@/api/queries/departmentAxios";
import type { DepartmentResponse } from "@/types/department-types";

const useDepartmentTableService = () => {
  const { data } = useGetAllDepartmentsAxios<DepartmentResponse[]>();

  return{
    fetchedData: data?.data || []
  }
}

export default useDepartmentTableService