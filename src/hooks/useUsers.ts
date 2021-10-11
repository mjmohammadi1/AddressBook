import request from '../api/request';
import { User } from '../state/state';

import { HTTP_METHODS } from '../types/api';
import { USER_QUERIES } from '../utils/queries';

type useUser = {
  getUsers: (page: number) => {};
};

const useUsers = (): useUser => {
  const getUsers = async (page: number): Promise<User[]> => {
    const {
      data: { results },
    } = await request(HTTP_METHODS.GET, USER_QUERIES.ALL_USERS + page);
    return results;
  };

  return { getUsers };
};

export { useUsers };
