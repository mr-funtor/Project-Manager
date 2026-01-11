import { useMutation, useQuery, useQueryClient, type UseQueryOptions } from "@tanstack/react-query";
import type { ApiResponse, postPayload } from "@/types/payload-type";
import mainFetch from "../mainFetch";
import mainPost from "../mainPost";

type OmitQueryKey<TData> = Omit<UseQueryOptions<TData>,'queryKey'>

const useGetAllDepartmentsAxios = <T>(options?: OmitQueryKey<ApiResponse<T>>) => {
  return useQuery({
    queryKey: ["all-departments"],
    queryFn: ({ signal }) => mainFetch<ApiResponse<T>>(`/Department`, { signal }),
    enabled: true,
    ...options
  });
};

const useCreateDepartmentAxios = <TRequest, TResponse>() => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ["create-department"],
    mutationFn: (variables:postPayload<TRequest>) => mainPost<TRequest, TResponse>(`/Department`, variables),
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: ["all-departments"] });
    }
  });
};


export {
  useGetAllDepartmentsAxios,
  useCreateDepartmentAxios
}