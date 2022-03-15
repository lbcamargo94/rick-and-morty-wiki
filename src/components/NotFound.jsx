import React from 'react';
import { Card } from 'react-bootstrap';

import '../styles/NotFound.css';

export default function NotFound() {
  return (
    <div
      className="align-items-center align-self-stretch bg-success
        d-flex flex-wrap justify-content-evenly p-3 w-100 h-100"
    >
      <Card className="bg-dark">
        <Card.Img src="https://i.pinimg.com/564x/fe/2b/26/fe2b26abd0b1a75a380e130f71965657.jpg" alt="Not Found Image" />
        <Card.ImgOverlay
          className="d-flex justify-content-center align-items-start"
        >
          <Card.Title
            className="font-not-found text text-success p-1 my-5"
          >
            No Results Found!
          </Card.Title>
        </Card.ImgOverlay>
        <Card.ImgOverlay
          className="d-flex justify-content-center align-items-end"
        >
          <Card.Title
            className="font-not-found text text-success p-1 my-5"
          >
            No Results Found!
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
