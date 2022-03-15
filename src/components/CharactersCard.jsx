import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function CharactersCard(props) {
  const { image, name, id } = props;

  const history = useHistory();

  return (
    <div>
      {/* Card Character */}
      <Card
        style={{ width: '20rem', height: '25rem' }}
        className="m-3 border-1 border-light rounded-3 d-flex
        flex-column justify-content-between"
      >
        <Card.Img
          alt={ name }
          className="border-bottom border-light h-auto w-100 p-1"
          src={ image }
        />
        <Card.Body
          className="text-center text-decoration-none p-1"
        >
          <Card.Title 
            variant="primary"
            className="text-truncate"
          >
            { name }
          </Card.Title>
          <Button
            className="px-2 w-50"
            onClick={() =>  history.push(`/character/${id}`)}
            variant="success"
          >
            More details
          </Button>
          </Card.Body>
      </Card>
    </div>
  );
}

CharactersCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;