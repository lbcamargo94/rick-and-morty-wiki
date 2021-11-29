import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
// import * as api from './services/api';
import './styles/App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainScreen } />
        <Route exact path="/Characters" component={ Characters } />
        <Route exact path="/Episodes" component={ Episodes } />
        <Route exact path="/Locations" component={ Locations } />
      </Switch>
    </BrowserRouter>
  );
}
