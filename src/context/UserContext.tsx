import React, { useReducer } from 'react';
import { UserContext as Context } from '../state/context';
import { UserReducer as reducer } from '../state/reducer';
import { InitialUser } from '../state/state';

export type ProviderProps = {
  children: React.ReactNode;
};

const UserContext = () => {
  const Provider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, InitialUser);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
  };
  return { Context, Provider };
};

export default UserContext();
