import React from 'react';

import { ThemeProvider } from 'styled-components'
import Form from './components/Form';
import Header from './components/Header';
import GlobalStyle from './styles/global'
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Form/>
      </div>
    </ThemeProvider>
  );
}

export default App;
