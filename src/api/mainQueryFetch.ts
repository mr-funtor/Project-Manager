import { useQuery } from '@tanstack/react-query'
import type { QueryFunctionContext, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import type { AxiosRequestConfig } from 'axios';
import { privateAccess } from './api';

type OmitQueryKey<TData> = Omit<UseQueryOptions<TData>,'queryKey'>

const mainQueryFetch = <TData>(url: string, queryKey: string[], queryOptions?:OmitQueryKey<TData>,fetchOptions?:AxiosRequestConfig<any> | undefined):UseQueryResult<TData> => {


  const axiosFunc = async({ signal }: QueryFunctionContext): Promise<TData> => {

    try {
      const response = await privateAccess.get<TData>(url, {
        ...fetchOptions,
        signal
      });

      if (!response || !response.data) {
        throw new Error('No data received from server');
      }

      return response.data;
      
    } catch (error: any) {
      throw error; 
    }
  };

  const fetchQuery  = useQuery({
    queryKey,
    queryFn: axiosFunc,
    enabled: false,
    ...queryOptions,
  })

  return fetchQuery
}

export default mainQueryFetch