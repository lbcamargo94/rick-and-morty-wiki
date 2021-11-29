import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';
import Loading from '../components/Loading';
import axios from 'axios';
// import * as api from '../services/api';


export default function mainScreen(){

  const [characters, setCharacters] = useState();
  const [locations, setLocations] = useState();
  const [episodes, setEpisodes] = useState();
  const [loading, setLoading] = useState(true);

  async function loadCharacters(){
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    setCharacters(response.data);
  }

  async function loadLocations(){
    const response = await axios.get('https://rickandmortyapi.com/api/location');
    setLocations(response.data);
  }

  async function loadEpisodes(){
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    setEpisodes(response.data);
    setLoading(false);
  }

  useEffect(()=> {
      loadCharacters()
      loadLocations()
      loadEpisodes()
  },[]);

  return (
    <div>
      <Header 
        characters={ characters }
        locations={ locations }
        episodes={ episodes }
      />
      {loading ? <Loading /> :
      <MainCarousel
        characters={ characters }
        locations={ locations }
        episodes={ episodes }
      />}
    </div>
  );
}
