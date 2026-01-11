import { useGetAllTeamMembersAxios } from "@/api/queries/teamAxios"
import type { TeamMemberType } from "@/types/team-types";

const useTeamTableService = () => {
  const {data, isLoading} = useGetAllTeamMembersAxios<TeamMemberType[]>();




  return{
    fetchedData : data?.data || [],
    isLoading
  }
}

export default useTeamTableService