import axios, { Method, AxiosResponse, Axios } from 'axios';

const { REACT_APP_HOST_URL } = process.env;

const api = axios.create({ baseURL: REACT_APP_HOST_URL });

//for now seetting it to all types , refactor
// think of the design pattern to ease the testability
const request = <T>(
  method: Method,
  url: string,
  params: string | number | object = {},
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    params,
  });
};

export default request;
