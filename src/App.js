import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


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
