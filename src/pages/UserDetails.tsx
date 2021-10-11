import React, { FunctionComponent, useContext } from 'react';
import UserIndexContext from '../context/UserContext';
import Page from '../types/page';

const UserDetails: FunctionComponent<Page> = () => {
  const {
    state: { name, phone },
  } = useContext(UserIndexContext.Context);

  return (
    <div>
      <h1>Users Details Page</h1>
      <div>
        <p>phone is : {phone}</p>
        <p>
          user name is : {name.title} {name.first} {name.last}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
