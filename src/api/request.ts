import axios, { Method, AxiosResponse } from 'axios';

const { REACT_APP_HOST_URL } = process.env;

const api = axios.create({ baseURL: REACT_APP_HOST_URL });

const request = <T>(method: Method, url: string): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
  });
};

export default request;
