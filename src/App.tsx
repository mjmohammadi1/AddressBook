import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import Users from './pages/Users';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
};

export default App;
