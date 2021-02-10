import React, { useEffect, useState } from 'react';
import {
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context/AuthProvider';


const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { data } = useAuth();
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const { token, uid, client } = data

    if (token && uid && client) {
      setIsLogged(true)
    } else setIsLogged(false)
  }, [setIsLogged, data])

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isLogged ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/home',
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

export default Route;