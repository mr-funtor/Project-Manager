import type { ApiResponse, postPayload } from "@/types/payload-type";
import { useMutation, useQuery, useQueryClient, type UseQueryOptions } from "@tanstack/react-query";
import mainFetch from "../mainFetch";
import mainPost from "../mainPost";

type OmitQueryKey<TData> = Omit<UseQueryOptions<TData>,'queryKey'>

const useGetAllProjectAxios = <T>(options?: OmitQueryKey<ApiResponse<T>>) => {
  return useQuery({
    queryKey: ["all-projects"],
    queryFn: ({ signal }) => mainFetch<ApiResponse<T>>('/Project', { signal }),
    ...options
  });
};

const useCreateProjectQuery = <TRequest, TResponse> () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-project"],
    mutationFn: (variables:postPayload<TRequest>)=> mainPost<TRequest, TResponse>("/Project", variables),
    onSuccess: ()=> {
      queryClient.invalidateQueries({queryKey: ["all-projects"]})
    }
  })
}

export {
  useGetAllProjectAxios,
  useCreateProjectQuery
}