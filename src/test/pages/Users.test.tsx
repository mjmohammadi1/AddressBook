import { render } from '@testing-library/react';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Users from '../../pages/Users';

describe('Users component test suite', () => {
  let container: HTMLDivElement;
  const queryClient = new QueryClient();

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Users />, container);
  });
});
