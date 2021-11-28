import React from 'react';
import { Carousel } from 'react-bootstrap';


export default function MainCarousel() {
  return (
    <div
    className="d-flex flex-row justify-content-center align-items-center vw-100 vh-100">
      <Carousel fade >
        <Carousel.Item
          className="d-flex align-items-center justify-content-center"
        >
          <img
            alt="First slide"
            className="d-flex"
            rounded
            src="https://picsum.photos/id/10/600"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="d-flex align-items-center justify-content-center"
        >
          <img
            alt="Second slide"
            className="d-flex"
            rounded
            src="https://picsum.photos/id/12/600"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="d-flex align-items-center justify-content-center"
        >
          <img
            alt="Third slide"
            className="d-flex"
            rounded
            src="https://picsum.photos/id/14/600"
          />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
