import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import request from '../api/request';
import UserIndexContext from '../context/UserContext';
import { HTTP_METHODS } from '../types/api';
import Page from '../types/page';

const { REACT_APP_USERS_RETURNED_PER_PAGE } = process.env;

const UserDetails: FunctionComponent<Page & RouteComponentProps<any>> = (props) => {
  const { seed }: { seed: string } = useParams();
  const {
    state: { name, phone },
  } = useContext(UserIndexContext.Context);
  console.log(' passed user to the User Details Screen :', name, phone);
  // const getUser = async () => {
  //   const {
  //     data: { results },
  //   } = await request(
  //     HTTP_METHODS.GET,
  //     `?results=${REACT_APP_USERS_RETURNED_PER_PAGE}&&seed=${seed}`,
  //   );
  //   return results[userIndex];
  // };
  // useEffect(() => {
  //   (async () => {
  //     console.log('loading user details ....'); //add try and catch
  //     const extracteduser = await getUser();
  //     console.log('extractedUser is : ', extracteduser);
  //     setUser(extracteduser);
  //   })();
  //make api call using the props
  // console.log('loading user details ....');
  // const extracteduser = await getUser();
  // setUser(extracteduser);
  // }, [props]);
  return (
    <div>
      <h1>Users Details Page!!!</h1>
      <div>
        <h3>phone is {phone}</h3>
        <h3>
          user name is : {name.title} {name.first} {name.last}
        </h3>
      </div>
    </div>
  );
};

export default UserDetails;
