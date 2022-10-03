import React,{useState} from 'react';

import { ThemeProvider } from 'styled-components'
import Password from './components/Password';
import Header from './components/Header';
import GlobalStyle from './styles/global'
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Number from './components/Number';

function App() {

  const [theme,setTheme] = useState(dark)

  const toggleTheme = () =>{
    setTheme(theme.title ==='dark'? dark: light)
  }

  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />
        <Header /> 
        <Password/>
        <Number/>

      </div>
    </ThemeProvider>
  );
}

export default App;
