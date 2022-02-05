import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WikiContext from '../Contexts';

export const WikiProvider = ({ children }) => {
  const [data, setData] = useState({
    data: {
      characters: [],
      locations: [],
      episodes: [],
    }    
  });
  const [filter, setFilter] = useState({
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

export const useUpdateContext = () => React.useContext(WikiContext);

WikiProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;