import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from './components/routes';

const queryClient = new QueryClient();
//put logging here instead of consile log
const Application = (): JSX.Element => {
  useEffect(() => {
    console.log('logging Application ...');
  });
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component name={route.name} {...props} {...route.props} />
                )}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Application;
