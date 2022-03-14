import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import WikiContext from '../Context';

export const WikiProvider = ({ children }) => {
  const [data, setData] = useState({
    data: {
      characters: {},
      locations: {},
      episodes: {},
    }    
  });
  const [filter, setFilter] = useState({
    page: {
      path: '',
    },
    search: {
      input: '',
    },
    filter: {
      characters: [],
      locations: [],
      episodes: [],
    }
  });

  return (
    <WikiContext.Provider value={ { data, setData, filter, setFilter } }>
      { children }
    </WikiContext.Provider>
  );
};

export const useUpdateContext = () => useContext(WikiContext);

WikiProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
