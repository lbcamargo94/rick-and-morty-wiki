import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import WikiContext from '../Context';

export const WikiProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    filter: {
      characters: [],
      locations: [],
      episodes: [],
    }
  });

  return (
    <WikiContext.Provider value={ { filter, setFilter } }>
      { children }
    </WikiContext.Provider>
  );
};

export const useUpdateContext = () => useContext(WikiContext);

WikiProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
