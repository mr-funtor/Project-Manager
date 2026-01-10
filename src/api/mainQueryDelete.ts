import { useMutation } from '@tanstack/react-query'
import type { ApiResponse } from '@/types/payloads-types'; 
import { privateAccess } from './api';
import { AxiosError, AxiosRequestConfig } from 'axios';


const mainQueryDelete = <T>(url:string, queryKey: string[], deleteOptions?: AxiosRequestConfig<any> | undefined)=> {

  const theAxios = () => {
    return privateAccess.delete(url, {
      ...deleteOptions,
    } )
  };

  const deleteMutation = useMutation<any, AxiosError<ApiResponse<T>> ,any>({
    mutationKey : queryKey,
    mutationFn:theAxios,
  })

  return deleteMutation
}

export default mainQueryDelete