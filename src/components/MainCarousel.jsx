import React from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export default function MainCarousel(props) {
  const { characters, locations, episodes } = props;

  return (
    <div
      className="align-items-center bg-success d-flex flex-row
      justify-content-center h-100 w-100"
    >
      <Carousel
        fade 
      >
        <Carousel.Item
          className="d-flex align-items-center align-self-center
          justify-content-center"
        >
          <Nav.Link
            href="/Characters"
            className="d-flex h-50 p-0 rounded-3 text-info w-50"
          >
            <img
              alt="First slide"
              className="d-flex h-100 rounded-3 text-info w-100"
              src={ characters.results[0].image }
            />
          </Nav.Link>
          <Carousel.Caption 
            className="bg-dark h-auto m-auto opacity-75 p-1 text-light w-50"
          >
            <h3 className="h-50 m-auto w-50">Characters</h3>
            <p>Total Characters:
              <span>{' '}{ characters.info.count }</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="d-flex flex-column align-items-center
          justify-content-center"
        >
          <Nav.Link
            href="/Locations"
            className="d-flex h-50 p-0 rounded-3 text-info w-50"
          >
            <img
              alt="Second slide"
              className="d-flex h-100 rounded-3 text-info w-100"
              rounded
              src={ characters.results[1].image }
            />
          </Nav.Link>
          <Carousel.Caption
            className="bg-dark h-auto m-auto opacity-75 p-1 text-light w-50"
          >
            <h3 className="h-50 m-auto w-50" >Locations</h3>
            <p>Total Locations:
              <span>{' '}{ locations.info.count }</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="d-flex flex-column align-items-center
          justify-content-center"
        >
          <Nav.Link
            href="/Episodes"
            className="d-flex h-50 p-0 rounded-3 text-info w-50"
          >
            <img
              alt="Third slide"
              className="d-flex h-100 rounded-3 text-info w-100"
              rounded
              src={ characters.results[2].image }
            />
          </Nav.Link>
        <Carousel.Caption
          className="bg-dark h-auto m-auto opacity-75 p-1 text-light w-50"
        >
          <h3 className="h-50 m-auto w-50">Episodes</h3>
          <p>Total Episodes:
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
