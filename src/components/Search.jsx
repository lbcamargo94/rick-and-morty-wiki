import React, { useState, useEffect } from 'react'
// import { useUpdateContext } from './Utils/Provider';
// import { getCharacters, getLocations, getEpisodes } from './services/api';

import Loading from './Loading';

export default function Search() {
  // const { filter, setFilter } = useUpdateContext();
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    // async function loadCharacters(){
    //   const resultChar = await getCharacters('character');
    //   const resultLoca = await getLocations('location');
    //   const resultEpis = await getEpisodes('episode');
    //   await setData({ data: {
    //     characters: resultChar.data,
    //     locations: resultLoca.data,
    //     episodes: resultEpis.data,
    //     },
    //   });
    // }
    // loadCharacters();
    setLoading(false);
  }, [loading]);

  return (
    <div>
      { loading ? <Loading /> : (
        <section>
          Results:
        </section>
      )}
    </div>
  );
}
