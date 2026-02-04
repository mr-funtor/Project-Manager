import { useDepartmentStatisticQuery } from "@/api/queries/dashboardQueries"
import type { DepartmentOverviewType } from "@/types/dashboard-types";

const useDepartmentsOverviewService = () => {
  const { data, isLoading } = useDepartmentStatisticQuery<DepartmentOverviewType[]>();

  console.log(data?.data)

  return{
    fetchedData: data?.data || [] as DepartmentOverviewType[],
    isLoading
  }
}

export default useDepartmentsOverviewService