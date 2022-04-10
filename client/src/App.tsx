import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { HomeContextProvider } from './contexts/home';

// Routes
import Router from './routes';

import Theme from './styles/theme';

import {client} from './services/apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <HomeContextProvider>
            <Router />
        </HomeContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
