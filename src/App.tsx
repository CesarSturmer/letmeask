import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { CustomThemeProvider } from './hooks/theme'
import { AuthContextProvider } from './contexts/AuthContext'
import GlobalStyle from './styles/global'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider >
        <CustomThemeProvider>
          <GlobalStyle />
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </CustomThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
