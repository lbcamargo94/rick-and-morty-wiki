import React from 'react'
import { Card } from 'react-bootstrap';

import '../styles/NotFound.css';

export default function LookingFor() {
  return (
    <div
      className="align-items-center align-self-stretch bg-success
        d-flex justify-content-evenly p-3"
    >
      <Card className="bg-dark">
        <Card.Img src="https://i.pinimg.com/originals/cd/c7/a2/cdc7a28ec1de7286fbb0f5c8c51ad9d4.jpg" alt="Looking For Image" />
        <Card.ImgOverlay
          className="d-flex justify-content-center align-items-center"
        >
          <Card.Title
            className="font-not-found text text-success p-1 my-5"
          >
            LookingFor?
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
