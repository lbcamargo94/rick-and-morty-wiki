import React from 'react';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';

import MainScreen from '../pages/MainScreen'
import Characters from '../pages/Characters';
import Locations from '../pages/Locations';
import Episodes from '../pages/Episodes';
import SearchResults from '../pages/SearchResults';

export default function NavigationRoutes() {

  
  return (
  <Switch>
    <Route exact path="/" component={ MainScreen } />
    <Route path="/characters/:pageId" component={ Characters } />
    <Route path="/locations/:pageId" component={ Locations } />
    <Route path="/episodes/:pageId" component={ Episodes } />
    <Route path="/search-results" component={ SearchResults } />
  </Switch>
  );}
