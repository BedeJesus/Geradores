import React,{useState} from 'react';

import { ThemeProvider } from 'styled-components'
import usePersistedState from './utils/usePersistedState';

import Password from './components/Password';
import Header from './components/Header';
import GlobalStyle from './styles/global'
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Number from './components/Number';

function App() {

  const [theme,setTheme] = usePersistedState('theme',light)

  const toggleTheme = () =>{
    setTheme(theme.title ==='light'? dark: light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme ={toggleTheme} /> 
        <Password/>
        <Number/>

      </div>
    </ThemeProvider>
  );
}

export default App;
