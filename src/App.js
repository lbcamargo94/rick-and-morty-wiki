import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import Loading from './components/Loading';
import * as api from './services/api';
import './styles/App.css';

export default function App() {

  const [characters, setCharacters] = useState();
  const [locations, setLocations] = useState();
  const [episodes, setEpisodes] = useState();
  const [loading, setLoading] = useState(true);

  async function loadCharacters(){
    const result = await api.getCharacters();
    setCharacters(result.data);
  }

  async function loadLocations(){
    const result = await api.getLocations()
    setLocations(result.data);
  }

  async function loadEpisodes(){
    const result = await api.getEpisodes()
    setEpisodes(result.data);
    setLoading(false);
  }

  useEffect(()=> {
      loadCharacters()
      loadLocations()
      loadEpisodes()
  },[]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainScreen } >
        {loading ? <Loading /> : <MainScreen
            characters={ characters }
            locations={ locations }
            episodes={ episodes }
          />}
        </Route >
        <Route path="/Characters" component={ Characters } >
        {loading ? <Loading /> : <Characters
            characters={ characters }
          />}
        <Route path="/Locations" component={ Locations } >
          {loading ? <Loading /> : <Locations
            locations={ locations }
          />}
        </Route >
        </Route >
        <Route path="/Episodes" component={ Episodes } >
          {loading ? <Loading /> : <Episodes
            episodes={ episodes }
          />}
        </Route >
      </Switch>
    </BrowserRouter>
  );
}
