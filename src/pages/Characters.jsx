import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../components/Header';
import CharactersCard from '../components/CharactersCard';

export default function Characters(props) {
  const { characters } = props;
  // console.log(characters);

  return (
    <div>
      <Header />
      <section
        className="align-items-center align-self-stretch bg-success
        d-flex flex-wrap justify-content-center p-2"
      >
      { characters.results.map((index) =>
        <CharactersCard
          key={ index.id }
          { ...index }
        />)}
      </section>
    </div>
  );
}

Characters.propTypes = {
  characters: PropTypes.object,
}.isRequired;