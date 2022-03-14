import React, { useState, useEffect } from 'react'
// import { useUpdateContext } from './Utils/Provider';
// import { getCharacters, getLocations, getEpisodes } from './services/api';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
} from 'react-bootstrap';

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
    <div
      className="h-100 d-flex flex-column"
    >
      {/* Search Bar */}
      <InputGroup
        className="px-3 my-3"
      >
        <FormControl
          placeholder="Search for ..."
          aria-label="Search for characters, locations or episodes!"
        />
        <Form.Select
          aria-label="Default select example"
          style={{ maxWidth: '7rem'}}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Button
          style={{ maxWidth: '7rem'}}
        >
          Search
        </Button>
      </InputGroup>
      {/* Searc */}
      { loading ? <Loading /> : (
        <section
          className="h-100 d-flex flex-column"
        >
          Results:
        </section>
      )}
    </div>
  );
}
