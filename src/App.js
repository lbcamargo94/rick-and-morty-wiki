import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SwiperCore, { Autoplay, Navigation, Virtual } from 'swiper';
import { useUpdateContext } from './Utils/Provider';
import { getCharacters, getLocations, getEpisodes } from './services';
import NavigationRoutes from './routes';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import './styles/App.css';
// import 'swiper/css';
// import 'swiper/css/virtual';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Navigation, Virtual]);

export default function App() {
  const { setData } = useUpdateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacters() {
      const resultChar = await getCharacters('character');
      const resultLoca = await getLocations('location');
      const resultEpis = await getEpisodes('episode');
      await setData({
        data: {
          characters: resultChar.data,
          locations: resultLoca.data,
          episodes: resultEpis.data,
        },
      });
    }
    loadCharacters();
    setLoading(false);
  }, [setLoading]);

  return (
    <BrowserRouter>
      {loading ? <Loading /> : <NavigationRoutes />}
    </BrowserRouter>
  );
}
