import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import WikiContext from '../Context';

export const WikiProvider = ({ children }) => {
  const [filterInfo, setFilterInfo] = useState({});
  const [filterResults, setFilterResults] = useState([]);
  const [search, setSearch] = useState('');
  const [selection, setSelection] = useState('character');
  const [data, setData] = useState({
    data: {
      characters: {},
      locations: {},
      episodes: {},
    } 
  });

  return (
    <WikiContext.Provider value={ { 
      data,
      setData,
      filterInfo,
      setFilterInfo,
      filterResults,
      setFilterResults,
      selection,
      setSelection,
      search,
      setSearch
      } }>
      { children }
    </WikiContext.Provider>
  );
};

export const useUpdateContext = () => useContext(WikiContext);

WikiProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
