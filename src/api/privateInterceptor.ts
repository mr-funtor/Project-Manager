import { getToken } from "@/utils/tokenUtils";
import { AxiosInstance } from "axios";

const privateInterceptor = (
  privateInstance: AxiosInstance
) => {
  privateInstance.interceptors.request.use(
    async (request) => {
			
			const accessToken = await getToken();

			if (accessToken) {
				request.headers['Authorization'] = `Bearer ${accessToken}`;
			}

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
