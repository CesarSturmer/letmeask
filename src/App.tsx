import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { CustomThemeProvider } from './hooks/theme';
import GlobalStyle from './styles/global';


function App() {


  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <GlobalStyle />
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
