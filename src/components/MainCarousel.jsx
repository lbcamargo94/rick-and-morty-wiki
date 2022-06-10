import React from 'react';
import { Carousel, Nav } from 'react-bootstrap';

import imageCharacters from '../assets/image/Characters.png';
import imageLocations from '../assets/image/Locations.png';
import imageEpisodes from '../assets/image/Episodes.png';
import { useUpdateContext } from '../Utils/Provider';
import '../styles/MainCarousel.css';

export default function MainCarousel() {
  const { data } = useUpdateContext();
  const { info } = data.data.characters;
  const currentPage = info
    ? info.next.replace('https://rickandmortyapi.com/api/character?page=', '')
    : '';

  return (
    <div
      className='align-items-start bg-success d-flex flex-row
      justify-content-center h-100 w-100'
    >
      <Carousel fade>
        <Carousel.Item
          className='d-flex flex-column align-items-center
          justify-content-center p-3'
        >
          <Nav.Link
            href={`/characters/${currentPage - 1}`}
            className='d-flex h-100 p-0 rounded-3 text-info border
            border-light'
          >
            <img
              alt='First slide'
              className='d-flex h-100 rounded-3 text-info w-100
            carousel-image-category'
              src={imageCharacters ? imageCharacters : ''}
            />
          </Nav.Link>
          <Carousel.Caption className='bg-dark h-auto m-auto opacity-75 p-1 text-light carousel-title-category'>
            <h3 className='h-50 m-auto w-75 fs-3'>Characters</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className='d-flex flex-column align-items-center
          justify-content-center p-3'
        >
          <Nav.Link
            href={`/locations/${currentPage - 1}`}
            className='d-flex h-100 p-0 rounded-3 text-info border
            border-light'
          >
            <img
              alt='Second slide'
              className='d-flex h-100 rounded-3 text-info w-100 mx-auto my-0
              carousel-image-category'
              src={imageLocations ? imageLocations : ''}
            />
          </Nav.Link>
          <Carousel.Caption className='bg-dark h-auto m-auto opacity-75 p-1 text-light carousel-title-category'>
            <h3 className='h-50 m-auto w-75 fs-3'>Locations</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className='d-flex flex-column align-items-center
          justify-content-center p-3'
        >
          <Nav.Link
            href={`/episodes/${currentPage - 1}`}
            className='d-flex h-100 p-0 rounded-3 text-info border
            border-light'
          >
            <img
              alt='Third slide'
              className='d-flex h-100 rounded-3 text-info w-100 mx-auto my-0
              carousel-image-category'
              src={imageEpisodes ? imageEpisodes : ''}
            />
          </Nav.Link>
          <Carousel.Caption className='bg-dark h-auto m-auto opacity-75 p-1 text-light carousel-title-category'>
            <h3 className='h-50 m-auto w-75 fs-3'>Episodes</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
