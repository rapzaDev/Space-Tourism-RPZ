import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { NavButtonsContextProvider } from './contexts/navButtons';

// Routes
import Router from './routes';

import Theme from './styles/theme';

import {client} from './services/apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <NavButtonsContextProvider>
            <Router />
        </NavButtonsContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
