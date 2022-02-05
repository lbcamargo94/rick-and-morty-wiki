import React, { useState } from 'react';
import { Card, Button, ListGroup, Modal } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import locations from '../data/locations';
export default function LocationsCard(props) {
  const { id, name, type, dimension, residents } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getLocationsImg = () => locations.filter((el) => el.id === id)[0].image;
  const getLocationsDesc = () => locations.filter((el) => el.id === id)[0].description;

  return (
    <div>
      {/* Card Locations */}
      <Card
        style={{ width: '18rem', height: '20rem' }}
        className="my-3 border-1 border-dark rounded-3"
      >
        {/* Image Locations */}
        <Card.Img
          className="border-bottom border-dark h-50 w-auto"
          src={ getLocationsImg() }
        />
        <Card.Body>
          <Card.Title
            className="text-truncate"
          >
            { name }
          </Card.Title>
          <Card.Text
            className="text-truncate"
          >
            { getLocationsDesc() }
          </Card.Text>
          <Button variant="success" onClick={ handleShow }>
          More details
          </Button>
        </Card.Body>
      </Card>

      {/* Modal Card Location */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            { name }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {`Id: ${ id }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Name: ${ name }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Type: ${ type }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Dimension: ${ dimension }`}
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex justify-content-between"
            >
              {`Characters : ${ residents.length }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Description: ${ getLocationsDesc() }`}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer
          className="d-flex justify-content-between"
        >
          <Button
            variant="success"
            // onClick={ handleShowCharacters }
          >
            View Characters
          </Button>
          <Button
            variant="success"
            // onClick={ handleShowImage }
          >
            View Image
          </Button>
          <Button 
            variant="success"
            onClick={ handleClose }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

LocationsCard.propTypes = {
  dimension: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  residents: PropTypes.string,
  type: PropTypes.string,
}.isRequired;