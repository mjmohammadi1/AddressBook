import request from '../api/request';

import { HTTP_METHODS } from '../types/api';
import { USER_QUERIES } from '../utils/queries';

const useUsers = () => {
  const getUsers = async (page: number): Promise<any> => {
    const {
      data: { results },
    } = await request(HTTP_METHODS.GET, USER_QUERIES.ALL_USERS);
    return results;
  };

  return { getUsers };
};

export { useUsers };
