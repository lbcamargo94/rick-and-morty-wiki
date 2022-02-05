import React from 'react';
import { Route } from 'react-router-dom'
import { PropTypes } from 'prop-types';

import MainScreen from '../pages/MainScreen'
import Characters from '../pages/Characters';
import CharacterDetail from '../pages/CharacterDetails';
import Locations from '../pages/Locations';
import LocationDetail from '../pages/LocationDetails';
import Episodes from '../pages/Episodes';
import EpisodeDetail from '../pages/EpisodeDetails';

import Loading from '../components/Loading';

export default function NavigationRoutes(props) {
  const {
    characters,
    locations,
    episodes,
    loading,
  } = props

  return (
  <>
    <Route exact path="/" component={ MainScreen } >
        {loading ? <Loading /> : <MainScreen
            characters={ characters }
            locations={ locations }
            episodes={ episodes }
    />}
    </Route >
    <Route path="/Characters" component={ Characters } />
    <Route path="/Character/:id" component={ CharacterDetail } />
    <Route path="/Locations" component={ Locations } />
    <Route path="/Location/:id" component={ LocationDetail } />
    <Route path="/Episodes" component={ Episodes } />
    <Route path="/Episode/:id" component={ EpisodeDetail } />
  </>
  );
}

NavigationRoutes.propTypes = {
  characters: PropTypes.object,
  locations: PropTypes.object,
  episodes: PropTypes.object,
  loading: PropTypes.bollean,
}.isRequired;
