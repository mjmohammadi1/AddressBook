import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Application from './ApplicationRouter';
import UserContext from './context/UserContext';

const queryClient = new QueryClient();

//ADD PROPER LOGGING
const App = (): JSX.Element => {
  // useEffect(() => {
  //   console.log('logging application ...');
  // });
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
