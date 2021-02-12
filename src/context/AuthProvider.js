import React, { createContext, useState, useContext, useEffect, useCallback } from "react";

import api from '../services/api';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('@IOASYS:token');
    const uid = localStorage.getItem('@IOASYS:uid');
    const client = localStorage.getItem('@IOASYS:client');

    if (token && uid && client) {
      setData({ token, uid, client })
    }
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/auth/sign_in', {
      email,
      password,
    });

    const { 'access-token': token, uid, client } = response.headers;

    localStorage.setItem('@IOASYS:token', token)
    localStorage.setItem('@IOASYS:uid', uid)
    localStorage.setItem('@IOASYS:client', client)
    setData({ token, uid, client })
  }, [])

  const signOut = useCallback(() => {
    localStorage.setItem('@IOASYS:token')
    localStorage.setItem('@IOASYS:uid')
    localStorage.setItem('@IOASYS:client')
    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        setData,
        data,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
