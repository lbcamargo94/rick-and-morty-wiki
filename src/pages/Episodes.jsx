import React, { useState, useEffect } from 'react';
import EpisodesCard from '../components/EpisodesCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Paginations from '../components/Paginations';
import * as api from '../services';

export default function Episodes() {

  const [episodes, setEpisodes] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [pageLimit, setPageLimit] = useState();
  const [loading, setLoading] = useState(true);
  
  async function loadEpisodes(path){
    setLoading(true);
    const result = await api.getEpisodes(`/episode?page=${ path }`);
    setEpisodes(result.data);
    setPageLimit(result.data.info.pages);
    setLoading(false);
  }
  
  const pageNumbers = [];
  for (let ind = 1; ind <= pageLimit; ind += 1){
    pageNumbers.push(ind);
  }
  
  useEffect(()=> {
    loadEpisodes('')
  },[]);

  return (
    <div>
      <Header />
      <section>
        <Paginations
          episodes={ episodes }
          pageLimit={ pageLimit }
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          loadCharacters= { loadEpisodes }
        />
      </section>
      <section
        className="align-items-center align-self-stretch bg-success
        d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
      >
      { loading ? <Loading /> : { ...episodes }.results.map((element) =>
        <EpisodesCard key={ element.id } { ...element }/>) }
      </section>
      <section>
        <Paginations
          locations={ episodes }
          pageLimit={ pageLimit }
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          loadCharacters= { loadEpisodes }
        />
      </section>
    </div>
  );
}
