import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import request from '../api/request';
import { HTTP_METHODS } from '../types/api';

const USERS_PER_PAGE = 5;

const Users: FunctionComponent = (): JSX.Element => {
  //FIX any type
  const [page, setPage] = useState<number>(1);

  const getUsers = async (page: number): Promise<any> => {
    //CONSIDER ADDING trye and catch here
    const { data } = await request(HTTP_METHODS.GET, `?results=${USERS_PER_PAGE}`); //number of users per page maybe hardcoded
    console.log(data);
    return data;
  };
  const { data, status, error } = useQuery<any, Error>(['users', page], () => getUsers(page), {
    staleTime: 10000,
    keepPreviousData: true,
  });

  //use spread operator
  const showUsers = () => {
    return data.results.map((user: any) => <text key={user.name}>user.name</text>);
  };
  return (
    <div>
      <h1>Users Page</h1>
      <text style={{ marginTop: 10 }}>Users</text>
      {status === 'loading' && <text>Loading data ...</text>}
      {status === 'error' && <text>Error fetching data</text>}
      <div>{showUsers}</div>
    </div>
  );
};

export default Users;
