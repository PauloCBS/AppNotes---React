import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './pages/Home';
import{SignUp} from './pages/SignUp';

import{ThemeProvider} from 'styled-components';
import theme from './styles/theme.js';
import GlobalStyle from './styles/global.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <SignUp/>
      </ThemeProvider>
  </React.StrictMode>,
)
