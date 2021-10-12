import { HTTP_METHODS, HTTP_STATUS_CODES } from '../../types/api';
import request from '../../api/request';
import { USER_QUERIES } from '../../utils/queries';

describe('request test suite', () => {
  const pageNumber = 1;
  test('successful api call returns 5  results', async () => {
    const {
      status,
      data: { results },
    } = await request(HTTP_METHODS.GET, USER_QUERIES.ALL_USERS + pageNumber);
    expect(status).toBe(HTTP_STATUS_CODES.OK);
    expect(results.length).toBe(10);
  });
});
