import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import CardModal from './CardModal';

export default function CharactersCard(props) {
  const { 
    image,
    name,
  } = props;

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Card.Link
        className="text-decoration-none text-dark"
      >
        <Card
          style={{ width: '18rem' }}
          className="m-3 border-1 border-dark"
        >
          <Card.Img
            alt={ name }
            className="border-bottom border-dark h-auto w-auto"
            src={ image }
            variant="top"
          />
          <Card.Body
            className="text-center text-decoration-none"
          >
            <Card.Title variant="primary" >
              { name }
            </Card.Title>
            <Button
              variant="success outline-none w-50"
              onClick={() => setModalShow(true)}
            >
              View Card
            </Button>
            <CardModal
              { ...props }
              show={ modalShow }
              onHide={ () => setModalShow(false) }
            />
          </Card.Body>
        </Card>
      </Card.Link>
    </div>
  );
}

CharactersCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;