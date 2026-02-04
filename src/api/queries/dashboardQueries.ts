import type { ApiResponse } from "@/types/payload-type";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import mainFetch from "../mainFetch";


type OmitQueryKey<TData> = Omit<UseQueryOptions<TData>,'queryKey'>

const useProjectStatisticQuery = <T>(options?: OmitQueryKey<ApiResponse<T>>) => {
  return useQuery({
    queryKey: ["project-stats"],
    queryFn: ({ signal }) => mainFetch<ApiResponse<T>>('/Dashboard/ProjectStatistics', { signal }),
    ...options
  });
};

const useDepartmentStatisticQuery = <T>(options?: OmitQueryKey<ApiResponse<T>>) => {
  return useQuery({
    queryKey: ["departments-stats"],
    queryFn: ({ signal }) => mainFetch<ApiResponse<T>>('/Dashboard/DepartmentStatistics', { signal }),
    ...options
  });
};


export {
  useProjectStatisticQuery,
  useDepartmentStatisticQuery
}