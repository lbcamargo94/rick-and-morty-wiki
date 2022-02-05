import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import NavigationRoutes from './routes'
import * as api from './services/api';
import './styles/App.css';

export default function App() {

  const [characters, setCharacters] = useState();
  const [locations, setLocations] = useState();
  const [episodes, setEpisodes] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    setLoading(true);
    async function loadCharacters(){
      const result = await api.getCharacters('https://rickandmortyapi.com/api/character');
      setCharacters(result.data);
    }
  
    async function loadLocations(){
      const result = await api.getLocations('https://rickandmortyapi.com/api/location')
      setLocations(result.data);
    }
  
    async function loadEpisodes(){
      const result = await api.getEpisodes('https://rickandmortyapi.com/api/episode')
      setEpisodes(result.data);
    }
    loadCharacters()
    loadLocations()
    loadEpisodes()
    setLoading(false);
  },[]);

  return (
    <BrowserRouter>
      <Switch>
        <NavigationRoutes
          characters={ characters }
          locations={ locations }
          episodes={ episodes }
          loading={ loading }
        />
      </Switch>
    </BrowserRouter>
  );
}
