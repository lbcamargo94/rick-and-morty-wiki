import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import LocationsCard from '../components/LocationsCard';
import Paginations from '../components/Paginations';
import * as api from '../services/api';

export default function Locations() {

  const [locations, setLocations] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [pageLimit, setPageLimit] = useState();
  const [loading, setLoading] = useState(true);

  async function loadLocations(path){
    setLoading(true);
    const result = await api.getCharacters(`https://rickandmortyapi.com/api/location?page=${ path }`);
    setLocations(result.data);
    setPageLimit(result.data.info.pages);
    setLoading(false);
  }

  const pageNumbers = [];
  for (let ind = 1; ind <= pageLimit; ind += 1){
    pageNumbers.push(ind);
  }

  useEffect(()=> {
    loadLocations('')
  },[]);

  return (
    <div
      className="vh-100"
    >
      <Header />
      <section
        className="align-items-center align-self-stretch bg-success
        d-flex flex-wrap  justify-content-center p-2 w-100"
      >
      { loading ? <Loading /> : { ...locations }.results.map((index) =>
        <LocationsCard key={ index.id } { ...index }/>) }
      </section>
      <section>
        <Paginations
          locations={ locations }
          pageLimit={ pageLimit }
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          loadCharacters= { loadLocations }
        />
      </section>
    </div>
  );
}
