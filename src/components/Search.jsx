import React, { memo, useState } from 'react'
import { useUpdateContext } from '../Utils/Provider';
import { api } from '../services'
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

function Search() {
  const {
    // filterInfo,
    setFilterInfo,
    filterResults,
    setFilterResults,
    selection,
    setSelection,
    search,
    setSearch
  } = useUpdateContext();

  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('')

  const renderCategory = () => {
    switch (category) {
      case 'character':
        return filterResults ? filterResults
          .map((el) => <CharactersCard key={el.id} { ...el }/>) : <Loading />;
      case 'location':
        return filterResults ? filterResults
          .map((el) => <LocationsCard key={el.id} { ...el }/>) : <Loading />;
      case 'episode':
        return filterResults ? filterResults
          .map((el) => <EpisodesCard key={el.id} { ...el }/>) : <Loading />;
      default:
        return <Loading />;
    }
  }
  
  const getSearchRequest = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`${selection}/?name=${search}`);
      setFilterResults(data.results);
      setFilterInfo(data.info);
      setCategory(selection);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

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
              onChange={(e) => setSelection(e.target.value)}
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
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                variant="light"
                disabled={ search === '' }
                onClick={() => getSearchRequest() }
              >
                  Search
              </Button>
            </InputGroup>
          </Form.Label>
        </Form.Group>
      </Form>
      {/* Searc */}
      { loading ? <Loading /> : 
        <section
        className="align-items-center align-self-stretch bg-success
        d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
        style={{minHeight : '100vh'}}
        >
          { filterResults && renderCategory() }
        </section>
      }
    </div>
  );
}

export default memo(Search);