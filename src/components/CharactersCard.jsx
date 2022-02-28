import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import CardModal from './CardModal';

export default function CharactersCard(props) {
  const { image, name } = props;

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      {/* Card Character */}
      <Card
        style={{ width: '18rem', height: '25rem' }}
        className="m-3 border-1 border-light rounded-3 d-flex flex-column justify-content-between"
      >
        <Card.Img
          alt={ name }
          className="border-bottom border-light h-auto w-auto"
          src={ image }
        />
        <Card.Body
          className="text-center text-decoration-none"
        >
          <Card.Title 
            variant="primary"
            className="text-truncate"
          >
            { name }
          </Card.Title>
          <Button
            variant="success outline-none w-50"
            onClick={() => setModalShow(true)}
          >
            More details
          </Button>
          <CardModal
            { ...props }
            show={ modalShow }
            onHide={ () => setModalShow(false) }
          />
        </Card.Body>
      </Card>
    </div>
  );
}

CharactersCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;