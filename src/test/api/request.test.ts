import axios from 'axios';
import { HTTP_METHODS, HTTP_STATUS_CODES } from '../../types/api';
import request from '../../api/request';
const { REACT_APP_HOST_URL } = process.env;
jest.mock('axios', () => {
  return {
    create: jest.fn(),
    request: jest.fn(),
  };
});
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('request unit test suite', () => {
  test('request api call', async () => {
    const api = mockedAxios.create.mockReturnValueOnce(mockedAxios);
    mockedAxios.request.mockImplementationOnce(() => Promise.resolve({}));
    await request(HTTP_METHODS.GET, '?results=5');
    expect(api).toBeCalledWith(REACT_APP_HOST_URL);
    expect(mockedAxios.request).toBeCalledWith((HTTP_METHODS.GET, '?results=5'));
  });
});
