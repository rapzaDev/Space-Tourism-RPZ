import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

// Routes
import Router from './routes';
//  Styles
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

import {client} from './services/apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <div className="App">
          <GlobalStyle />
          <Router />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
