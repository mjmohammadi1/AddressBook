import { HTTP_METHODS, HTTP_STATUS_CODES } from '../../types/api';
import request from '../../api/request';

describe('request test suite', () => {
  test('successful api call returns 5  results', async () => {
    const {
      status,
      data: { results },
    } = await request(HTTP_METHODS.GET, '?results=5');
    expect(status).toBe(HTTP_STATUS_CODES.OK);
    expect(results.length).toBe(5);
  });
  //TODO get data for a specific user
  //TODO unit test for the request module
  //config for unit and integration tests
});
