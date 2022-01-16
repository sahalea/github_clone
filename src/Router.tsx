import React from 'react';
import { useRoutes } from 'react-router-dom';
import Developers from './developers';
import Repositories from './repositories';

/**
 * Declare the routes
 *
 * @returns
 */
export const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <Repositories /> },
    { path: '/developers', element: <Developers /> },
    // ...
  ]);
  return routes;
};
