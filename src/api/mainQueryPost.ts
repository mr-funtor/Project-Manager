import { useMutation } from '@tanstack/react-query'
import type { ApiResponse, postPayload } from '@/types/payload-type';
import { privateAccess } from './api';
import { AxiosError } from 'axios';
import type { AxiosRequestConfig } from 'axios';


const mainQueryPost = <T>(url:string, queryKey: string[], postOptions?: AxiosRequestConfig<any> | undefined)=> {

  // remember that the variables comes from "mutate" in React Query
  const theAxios = (variables:postPayload<T>) => {
    return privateAccess.post(url, variables, {
      ...postOptions,
    } )
  };

  const postMutation = useMutation<any, AxiosError<ApiResponse<T>> ,any>({
    mutationKey : queryKey,
    mutationFn:theAxios,
  })

  return postMutation
}

export default mainQueryPost