import React, { useEffect, useState } from 'react';
import {
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

// import { useAuth } from '../context/AuthProvider';


const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // const { data } = useAuth();
  const [isLogado, setIsLogado] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('@IOASYS:token');
    const uid = localStorage.getItem('@IOASYS:uid');
    const client = localStorage.getItem('@IOASYS:client');

    if (token && uid && client) {
      setIsLogado(true)
    } else setIsLogado(false)
  }, [setIsLogado])

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isLogado ? (
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