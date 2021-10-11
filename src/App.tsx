import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Application from './ApplicationRouter';
import UserContext from './context/UserContext';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <div>
      <UserContext.Provider>
        <QueryClientProvider client={queryClient}>
          <Application />
        </QueryClientProvider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
