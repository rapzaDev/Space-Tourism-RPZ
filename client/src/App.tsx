import React from 'react';
import { ThemeProvider } from 'styled-components';

// Routes
import Router from './routes';
//  Styles
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <GlobalStyle />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
