import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { CustomThemeProvider } from './hooks/theme'
import { AuthContextProvider } from './contexts/AuthContext'
import GlobalStyle from './styles/global'
import { Room } from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'




function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider >
        <CustomThemeProvider >
          <GlobalStyle />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new"  component={NewRoom} />
          <Route  path="/rooms/:id/"  component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </CustomThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
