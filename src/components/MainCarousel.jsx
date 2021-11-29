import React from 'react';
import { Carousel } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export default function MainCarousel(props) {
  const { characters, locations, episodes } = props;

  return (
    <div
    className="align-items-center bg-success d-flex flex-row
    justify-content-center vh-100 vw-100"
    >
      <Carousel
        fade 
      >
        <Carousel.Item
          className="d-flex align-items-center align-self-center
          justify-content-center"
        >
          <img
            alt="First slide"
            className="d-flex h-50 rounded-3 text-info w-50"
            src={ characters.results[0].image }
          />
          <Carousel.Caption 
            className="bg-dark opacity-75 text-light w-50 m-auto p-1"
          >
            <h3>Personagens</h3>
            <p>Personagens totais:
              <span>{' '}{ characters.info.count }</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="d-flex flex-column align-items-center
          justify-content-center">
          <img
            alt="Second slide"
            className="d-flex h-50 rounded-3 text-info w-50"
            rounded
            src={ characters.results[1].image }
          />

          <Carousel.Caption
            className="bg-dark opacity-75 text-light w-50 m-auto p-1"
          >
            <h3>Lugares</h3>
            <p>Lugares totais:
              <span>{' '}{ locations.info.count }</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="d-flex flex-column align-items-center
          justify-content-center"
        >
          <img
            alt="Third slide"
            className="d-flex h-50 rounded-3 text-info w-50"
            rounded
            src={ characters.results[2].image }
          />
        <Carousel.Caption
          className="bg-dark opacity-75 text-light w-50 m-auto p-1"
        >
          <h3>Episódios</h3>
          <p>Episódios totais:
            <span>{' '}{ episodes.info.count }</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

MainCarousel.propTypes = {
  characters: PropTypes.object,
  locations: PropTypes.object,
  episodes: PropTypes.object,
}.isRequired;
