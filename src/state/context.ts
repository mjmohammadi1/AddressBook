import React from 'react';
import { UserActions } from './actions';
import { updateUser } from './reducer';
import { InitialUser, User } from './state';

export const UserContext = React.createContext<{
  state: User;
  dispatch: React.Dispatch<UserActions>;
}>({
  state: InitialUser,
  dispatch: () => {
    updateUser;
  },
});
