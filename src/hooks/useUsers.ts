import { useQuery } from 'react-query';
import request from '../api/request';
import { User } from '../state/state';

import { HTTP_METHODS } from '../types/api';
import { REACT_QUERY_STALE_TIME, USER_QUERIES } from '../utils/queries';

// type useUser = {
//   getUsers: (page: number):Promise<User[]> =>{};
// };

const useUsers = () => {
  const queryUsers = (page: number) => {
    const { data, status, error } = useQuery<any, Error>(['users', page], () => getUsers(page), {
      staleTime: REACT_QUERY_STALE_TIME,
      keepPreviousData: true,
    });
    return { data, status, error };
  };
  const getUsers = async (page: number): Promise<User[]> => {
    const {
      data: { results },
    } = await request(HTTP_METHODS.GET, USER_QUERIES.ALL_USERS + page);
    return results;
  };

  return { queryUsers };
};

export { useUsers };
