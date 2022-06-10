import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import Paginations from '../components/Paginations';
import { useParams } from 'react-router-dom';
import * as api from '../services';

export default function Characters() {
  const { pageId } = useParams();

  const [characters, setCharacters] = useState();
  const [currentPage, setCurrentPage] = useState(pageId);
  const [pageLimit, setPageLimit] = useState();
  const [loading, setLoading] = useState(true);

  async function loadCharacters(path){
    setLoading(true);
    const result = await api.getCharacters(`character?page=${ path }`);
    setCharacters(result.data);
    setPageLimit(result.data.info.pages);
    setLoading(false);
  }

  const pageNumbers = [];
  for (let ind = 1; ind <= pageLimit; ind += 1){
    pageNumbers.push(ind);
  }

  useEffect(()=> {
    loadCharacters(currentPage)
  }, [currentPage]);

  return (
    <div
      className="vh-100"
    >
      <Header />
      <div>
        <Paginations
          page='characters'
          characters={ characters }
          pageLimit={ pageLimit }
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          loadCharacters= { loadCharacters }
        />
      </div>
      <section
        className="align-items-center align-self-stretch bg-success
        d-flex flex-wrap  justify-content-center p-2 w-100"
      >
      { 
        loading ? <Loading /> : { ...characters }.results
        .map((index) => <CharacterCard key={ index.id } { ...index }/>)
      }
      </section>
      <div>
        <Paginations
          page='characters'
          characters={ characters }
          pageLimit={ pageLimit }
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          loadCharacters= { loadCharacters }
        />
      </div>
    </div>
  );
}
