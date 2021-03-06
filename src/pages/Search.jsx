import React, { memo, useState } from 'react';
import { FormControl, Button, Form, InputGroup } from 'react-bootstrap';
import Header from '../components/Header';
import Loading from '../components/Loading';
import CharacterCard from '../components/CharacterCard';
import LocationCard from '../components/LocationCard';
import EpisodeCard from '../components/EpisodeCard';
import NotFound from '../components/NotFound';
import LookingFor from '../components/LookingFor';
import { api } from '../services';
import { useUpdateContext } from '../Utils/Provider';

function Search() {
  const {
    filterInfo,
    setFilterInfo,
    filterResults,
    setFilterResults,
    selection,
    setSelection,
    search,
    setSearch,
  } = useUpdateContext();

  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');

  const renderCategory = () => {
    switch (category) {
      case 'character':
        return filterResults ? (
          filterResults.map((el) => <CharacterCard key={el.id} {...el} />)
        ) : (
          <Loading />
        );
      case 'location':
        return filterResults ? (
          filterResults.map((el) => <LocationCard key={el.id} {...el} />)
        ) : (
          <Loading />
        );
      case 'episode':
        return filterResults ? (
          filterResults.map((el) => <EpisodeCard key={el.id} {...el} />)
        ) : (
          <Loading />
        );
      default:
        return <Loading />;
    }
  };

  const getSearchRequest = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`${selection}/?name=${search}`);
      setFilterResults(data.results);
      setFilterInfo(data.info);
      setCategory(selection);
    } catch (error) {
      setFilterResults('notfound');
    } finally {
      setLoading(false);
    }
  };

  const loadMoreSearch = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(
        filterInfo.next.replace('https://rickandmortyapi.com/api/', ''),
      );
      const newArr = [...filterResults];
      data.results.map((el) => newArr.push(el));
      setFilterResults(newArr);
      setFilterInfo(data.info);
      renderCategory();
    } catch (error) {
      error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-100 w-100 d-flex flex-column">
      <Header />
      <div
        className="align-items-center align-self-stretch bg-success
      d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
      >
        {/* Search Bar */}
        <Form
          className="d-flex justify-content-center flex-column m-auto
        w-100"
          style={{ minWidth: '25rem', maxWidth: '50rem' }}
        >
          {/* Dropdown select search category */}
          <Form.Group className="my-2 px-3" controlId="formBasicEmail">
            <Form.Label className="w-100 text-white my-3">
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
            {/* Search bar */}
            <Form.Label className="w-100 text-white my-3">
              Search by name or id
              <InputGroup className="w-100">
                <FormControl
                  aria-label="Search by name or id"
                  className=""
                  placeholder="Search by name or id"
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* Button search */}
                <Button
                  variant="light"
                  disabled={search === ''}
                  onClick={() => getSearchRequest()}
                >
                  Search
                </Button>
              </InputGroup>
            </Form.Label>
          </Form.Group>
        </Form>
        {/* Render search results */}
        {loading ? (
          <Loading />
        ) : filterResults.length === 0 ? (
          <LookingFor />
        ) : filterResults === 'notfound' ? (
          <NotFound />
        ) : (
          <section
            className="align-items-start align-self-stretch bg-success
        d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
            style={{ height: '100%' }}
          >
            <div
              className="align-items-start align-self-stretch bg-success
            d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
            >
              {filterResults && renderCategory()}
            </div>
            <div
              className="align-items-start align-self-stretch bg-success
            d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
            >
              {filterInfo.next !== null ? (
                <Button
                  className="px-2 w-100"
                  style={{ maxWidth: '10rem' }}
                  onClick={() => {
                    loadMoreSearch();
                  }}
                  variant="light"
                >
                  Load Cards
                </Button>
              ) : (
                ''
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default memo(Search);
