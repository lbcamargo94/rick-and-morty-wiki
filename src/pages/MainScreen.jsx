import React from 'react';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';
import { PropTypes } from 'prop-types';

export default function mainScreen(props){
  const { characters, locations, episodes } = props;

  return (
    <div
      className="vh-100 w-100"
    >
      <Header />
      <MainCarousel
        characters={ characters }
        locations={ locations }
        episodes={ episodes }
      />
    </div>
  );
}

MainCarousel.propTypes = {
  characters: PropTypes.object,
  locations: PropTypes.object,
  episodes: PropTypes.object,
}.isRequired;