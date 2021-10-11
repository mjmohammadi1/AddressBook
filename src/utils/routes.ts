import Route from '../types/route';
import UserDetails from '../pages/UserDetails';
import Users from '../pages/Users';
const routes: Route[] = [
  {
    path: '/',
    name: 'Users',
    component: Users,
    exact: true,
  },
  {
    path: '/UserDetails/',
    name: 'User Details',
    component: UserDetails,
    exact: true,
  },
];

export default routes;
