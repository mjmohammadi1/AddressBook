import React, { FunctionComponent, useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../state/reducer';
import { User } from '../state/state';

import { useUsers } from '../hooks/useUsers';

const Users: FunctionComponent = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const { dispatch } = useContext(UserContext.Context);

  const { queryUsers } = useUsers();
  const { data, status } = queryUsers(page);

  const history = useHistory();

  const updateUserState = (index: number) => {
    const user: User = data[index];
    dispatch(updateUser(user));
  };

  const redirectToUserDetails = () => {
    history.push('/UserDetails/');
  };

  const isDisabled = () => {
    return page - 1 === 0 ? true : false;
  };

  const displayUsers = () => {
    return (
      <List>
        {data.map((user: User, index: number) => (
          <ListItem key={user.name.first + user.phone}>
            <div style={{ alignContent: 'center' }}>
              <ListItemText>
                {user.name.title} {user.name.first} {user.name.last}
              </ListItemText>
              <ListItemButton
                onClick={() => {
                  updateUserState(index);
                  redirectToUserDetails();
                }}>
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
      <Button
        variant="contained"
        onClick={() => (page - 1 === 0 ? null : setPage(page - 1))}
        disabled={isDisabled()}>
        Previous Page
      </Button>
      <Button style={{ marginLeft: 10 }} variant="contained" onClick={() => setPage(page + 1)}>
        Next Page
      </Button>
      {handlePageRender()}
    </div>
  );
};
export default Users;
