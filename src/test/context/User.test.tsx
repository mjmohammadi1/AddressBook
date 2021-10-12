import React, { FunctionComponent, useContext } from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import UserContext from '../../context/UserContext';
const { Context, Provider } = UserContext;

describe('UserContext test suite', () => {
  it('gets the user status', () => {
    const TestComponent: FunctionComponent = () => {
      const {
        state: { name, phone },
      } = useContext(Context);
      return (
        <>
          <h1>Users Details Page</h1>
          <div>
            <p>phone is : {phone}</p>
            <p>
              user name is : {name.title} {name.first} {name.last}
            </p>
          </div>
        </>
      );
    };

    const wrapper = Enzyme.mount(
      <Provider>
        <TestComponent />
      </Provider>,
    );

    expect(wrapper.find('h1').text()).toEqual('Users Details Page');
  });
});
