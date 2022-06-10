import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PropTypes } from 'prop-types';
import CardModal from './CardModal';

export default function CharacterCard(props) {
  const { image, name } = props;

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      {/* Card Character */}
      <Card
        style={{ width: '20rem', height: '25rem' }}
        className="m-3 border-1 border-light rounded-3 d-flex
        flex-column justify-content-between"
      >
        <LazyLoadImage
          className="border-bottom border-light h-auto w-100 p-1"
          src={image}
        />
        <Card.Body className="text-center text-decoration-none p-1">
          <Card.Title variant="primary" className="text-truncate">
            {name}
          </Card.Title>
          <Button
            className="px-2 w-50"
            onClick={() => setModalShow(true)}
            variant="success"
          >
            More details
          </Button>
          <CardModal
            {...props}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
