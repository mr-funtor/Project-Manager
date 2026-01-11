import { useMutation, useQuery, useQueryClient, type UseQueryOptions } from "@tanstack/react-query";
import type { ApiResponse, postPayload } from "@/types/payload-type";
import mainFetch from "../mainFetch";
import mainPost from "../mainPost";


type OmitQueryKey<TData> = Omit<UseQueryOptions<TData>,'queryKey'>

const useGetAllTeamMembersAxios = <T>(options?: OmitQueryKey<ApiResponse<T>>) => {
  return useQuery({
    queryKey: ["all-team-members"],
    queryFn: ({ signal }) => mainFetch<ApiResponse<T>>('/TeamMember', { signal }),
    ...options
  });
};


const useCreateTeamMemberAxios = <TRequest, TResponse>() => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-team-member"],
    mutationFn: (variables:postPayload<TRequest>) => mainPost<TRequest, TResponse>('/TeamMember', variables),
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: ["all-team-members"] });
    }
  });
};


export {
  useGetAllTeamMembersAxios,
  useCreateTeamMemberAxios
}