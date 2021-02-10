import React from 'react';

import AuthProvider from './AuthProvider';

const AppProvider = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

export default AppProvider;