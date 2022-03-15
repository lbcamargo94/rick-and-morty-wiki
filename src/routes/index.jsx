import React from 'react';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';

import MainScreen from '../pages/MainScreen'
import Characters from '../pages/Characters';
import CharacterDetail from '../pages/CharacterDetails';
import Locations from '../pages/Locations';
import LocationDetail from '../pages/LocationDetails';
import Episodes from '../pages/Episodes';
import EpisodeDetail from '../pages/EpisodeDetails';
import SearchResults from '../pages/SearchResults';

export default function NavigationRoutes() {
  return (
  <Switch>
    <Route exact path="/" component={ MainScreen } />
    <Route path="/characters/:id" component={ Characters } />
    <Route path="/character/:id" component={ CharacterDetail } />
    <Route path="/locations" component={ Locations } />
    <Route path="/location/:id" component={ LocationDetail } />
    <Route path="/episodes" component={ Episodes } />
    <Route path="/episode/details/:id" component={ EpisodeDetail } />
    <Route path="/search-results" component={ SearchResults } />
  </Switch>
  );}
