import React, { useState, useEffect } from 'react'
import { useUpdateContext } from '../Utils/Provider';
import { getSearch } from '../services'
import {
  FormControl,
  Button,
  Form,
  InputGroup,
} from 'react-bootstrap';

import Loading from './Loading';
import CharactersCard from './CharactersCard';
import LocationsCard from './LocationsCard';
import EpisodesCard from './EpisodesCard';

export default function Search() {
  const { filter, setFilter } = useUpdateContext();
  
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('character');
  const [inputBar, setInputBar] = useState('rick')

  const renderCategory = () => {
    switch (category) {
      case 'character':
        return filter.results ? filter.results.map((el) => <CharactersCard key={el.id} { ...el }/>) : <Loading />;
      case 'location':
        return filter.results ? filter.results.map((el) => <LocationsCard key={el.id} { ...el }/>) : <Loading />;
      case 'episode':
        return filter.results ? filter.results.map((el) => <EpisodesCard key={el.id} { ...el }/>) : <Loading />;
      default:
        return <Loading />;
    }
  }
  
  const getSearchRequest = async () => {
      const resultAPI = await getSearch(`${category}/?name=${inputBar}`);
      await setFilter({ ...filter, ...resultAPI.data });
  }
  
  useEffect(()=> {
    setLoading(false);
  }, [loading]);

  return (
    <div
      className="align-items-center align-self-stretch bg-success
      d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
    >
      {/* Search Bar */}
      <Form
        className="d-flex justify-content-center flex-column m-auto w-100"
        style={{ minWidth: '25rem', maxWidth: '50rem'}}
      >
        {/* Dropdown select search category */}
        <Form.Group
          className="my-2 px-3"
          controlId="formBasicEmail"
        >
          <Form.Label
            className="w-100 text-white my-3"
          >
            Select Category
          <Form.Select
            aria-label="Default select example"
            className=""
            onChange={ ({ target }) => setCategory(target.value) }
          >
            <option value="character">Character</option>
            <option value="location">Location</option>
            <option value="episode">Episode</option>
          </Form.Select>
          </Form.Label>
          <Form.Label
            className="w-100 text-white my-3"
          >
            Search by name or id
            <InputGroup
              className="w-100"
            >
              <FormControl
                aria-label="Search by name or id"
                className=""
                placeholder="Search by name or id"
                onChange={({target}) => setInputBar(target.value) }
              />
              <Button
                variant="light"
                onClick={() => getSearchRequest() }
              >
                  Search
              </Button>
            </InputGroup>
          </Form.Label>
        </Form.Group>
      </Form>
      {/* Searc */}
      { loading ? <Loading /> : (
        <section
          className="align-items-center align-self-stretch bg-success
          d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
          style={{minHeight : '100vh'}}
        >
           { filter.results ? renderCategory() : '' }
        </section>
      )}
    </div>
  );
}
