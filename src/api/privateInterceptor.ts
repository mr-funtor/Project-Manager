import { type AxiosInstance } from "axios";

const privateInterceptor = (
  privateInstance: AxiosInstance
) => {
  privateInstance.interceptors.request.use(
    async (request) => {
			
		

      return request;
    },

    (error) => {
      return Promise.reject(error);
    }
  );

  privateInstance.interceptors.response.use(
    (response) => {
      return response;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
};

export default privateInterceptor;
