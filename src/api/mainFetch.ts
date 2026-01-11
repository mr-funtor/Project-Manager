import type { AxiosRequestConfig } from 'axios';
import { privateAccess } from './api';

const mainFetch = async <TData>(
  url: string, 
  config?: AxiosRequestConfig
): Promise<TData> => {
  try {
    const response = await privateAccess.get<TData>(url, config);
    
      if (!response || !response.data) {
        throw new Error('No data received from server');
      }

      return response.data;
    
  } catch (error) {
    throw error; 
  }
};

export default mainFetch