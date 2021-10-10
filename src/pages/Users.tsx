import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import request from '../api/request';
import { HTTP_METHODS } from '../types/api';

const Users: FunctionComponent = (): JSX.Element => {
  //FIX any type
  const [page, setPage] = useState<number>(1);

  const fetchUsers = async (page: number): Promise<any> => {
    const {
      data: { results },
    } = await request(HTTP_METHODS.GET, '?results=5');
    return results;
  };
  const { data, status } = useQuery<any, Error>(['users', page], () => fetchUsers(page), {
    staleTime: 10000,
    keepPreviousData: true,
  });
  return (
    <div>
      <h1>Users Page</h1>
      <text style={{ marginTop: 10 }}>Users</text>

      {/* <h1>Users Page</h1> */}
    </div>
  );
};

export default Users;
