import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@ioasys:token');
    const uid = localStorage.getItem('@ioasys:uid');
    const client = localStorage.getItem('@ioasys:client');

    if (token && uid && client) {
      api.defaults.headers = `${token}`;
      api.defaults.headers = `${uid}`;
      api.defaults.headers = `${client}`;

      return [token, uid, client];
    }

    return;
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('@ioasys:token');
    localStorage.removeItem('@asdf:uid');
    localStorage.removeItem('@asdf:client');

    setData();
  }, []);

  const showEnterprise = useCallback(async () => {
    const response = await api.get('enterprises/1')
    console.log('show', response.data)
    console.log('show', response)
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/auth/sign_in', {
      email,
      password,
    });
    console.log('response.data', response.data)
    console.log('response.data', response.headers)

    const { uid, client } = response.headers;
    const { 'access-token': accessToken } = response.headers

    localStorage.setItem('@asdf:token', accessToken);
    localStorage.setItem('@asdf:uid', uid);
    localStorage.setItem('@asdf:client', client);

    api.defaults.headers = `${accessToken}`;
    api.defaults.headers = `${uid}`;
    api.defaults.headers = `${client}`;

    setData({ accessToken, uid, client });
  }, []);


  return (
    <AuthContext.Provider
      value={{ data, signIn, signOut, showEnterprise }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };