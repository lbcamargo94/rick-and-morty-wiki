import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useUpdateContext } from './Utils/Provider';
import { getCharacters, getLocations, getEpisodes } from './services';
import NavigationRoutes from './routes'
import Loading from './components/Loading';
import './styles/App.css';

export default function App() {
  const { setData } = useUpdateContext();
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    async function loadCharacters(){
      const resultChar = await getCharacters('character');
      const resultLoca = await getLocations('location');
      const resultEpis = await getEpisodes('episode');
      await setData({ data: {
        characters: resultChar.data,
        locations: resultLoca.data,
        episodes: resultEpis.data,
        },
      });
    }
    loadCharacters();
    setLoading(false);
  },[setLoading]);

  return (
    <BrowserRouter>
    { loading ? <Loading /> : <NavigationRoutes /> }
    </BrowserRouter>
  );
}
