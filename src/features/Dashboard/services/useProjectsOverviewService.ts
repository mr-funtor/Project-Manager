import { useProjectStatisticQuery } from "@/api/queries/dashboardQueries"
import type { ProjectsOverviewType } from "@/types/dashboard-types";

const useProjectsOverviewService = () => {
  const { data, isLoading } = useProjectStatisticQuery<ProjectsOverviewType>();

  return{
    fetchedData: data?.data || {} as ProjectsOverviewType,
    isLoading
  }
}

export default useProjectsOverviewService