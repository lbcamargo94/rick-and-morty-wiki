import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import * as api from './services/api';
import './styles/App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <MainScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
