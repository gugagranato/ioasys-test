import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './shared/theme/globalStyles'

import Routes from './routes';
import AppProvider from './context';

const App = () => (
  <Router>
    <AppProvider>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  </Router>
);

export default App;