import { privateAccess } from './api';
import type { AxiosRequestConfig } from 'axios';


const mainPost = async <TRequest, TResponse>(url: string,data: TRequest,config?: AxiosRequestConfig): Promise<TResponse> => {
  try {
    const response = await privateAccess.post<TResponse>(url, data, config);

    if (!response || !response.data) {
      throw new Error('No data received from server');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default mainPost