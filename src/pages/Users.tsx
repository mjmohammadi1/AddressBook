import React, { FunctionComponent, useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { useQuery } from 'react-query';
import request from '../api/request';
import { HTTP_METHODS } from '../types/api';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../state/reducer';
import { User } from '../state/state';
const { REACT_APP_USERS_RETURNED_PER_PAGE } = process.env;

const Users: FunctionComponent = (): JSX.Element => {
  //FIX any type
  //Pagination
  const [page, setPage] = useState<number>(1);
  const { dispatch } = useContext(UserContext.Context);

  const getUsers = async (page: number): Promise<any> => {
    console.log('REACT_APP_USERS_RETURNED_PER_PAGE', REACT_APP_USERS_RETURNED_PER_PAGE);
    //CONSIDER ADDING trye and catch here
    const { data } = await request(HTTP_METHODS.GET, '?results=10'); //number of users per page maybe hardcoded, maybe i add something like a query instead of '?=results'
    console.log('result :', data);
    return data;
  };

  const { data, status, error } = useQuery<any, Error>(['users', page], () => getUsers(page), {
    staleTime: 600000,
    keepPreviousData: true,
  });

  const history = useHistory();

  const goToUserDetails = (index: number) => {
    console.log('go to user details called');
    const {
      name: { title, first, last },
      phone,
    }: User = data.results[index];
    const user: User = {
      name: { title, first, last },
      phone,
    };
    //update user state , then mredirect and render
    console.log('data.results[0] : ', { title, first, last }, phone);

    dispatch(updateUser(user));
    history.push('/UserDetails/');
  };

  const displayUsers = () => {
    return (
      <List>
        {data.results.map((user: any, index: number) => (
          <ListItem key={user.email}>
            <div style={{ alignContent: 'center' }}>
              <ListItemText>
                {user.name.title} {user.name.first} {user.name.last}
              </ListItemText>
              <ListItemButton
                onClick={() => {
                  goToUserDetails(index);
                }}
              >
                See Details
              </ListItemButton>
            </div>
          </ListItem>
        ))}
      </List>
    );
  };

  const handlePageRender = () => {
    return (
      <div>
        {status === 'loading' && <h3>Loading data ...</h3>}
        {status === 'error' && <h3>Error fetching data</h3>}
        {status === 'success' && displayUsers()}
      </div>
    );
  };

  return (
    <div>
      <h1>Users Page</h1>
      {handlePageRender()}
    </div>
  );
};
export default Users;
