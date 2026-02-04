import { useGetAllProjectAxios } from "@/api/queries/projectQueries"
import { type ProjectResponseType } from "@/types/project-types";

const useProjectsTableService = () => {
  const { data, isLoading } = useGetAllProjectAxios<ProjectResponseType[]>();

  return{
    fetchedData : data?.data || [],
    isLoading
  }
}

export default useProjectsTableService