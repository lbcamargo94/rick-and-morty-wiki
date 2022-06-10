import React, { useState } from 'react';
import { Card, Button, ListGroup, Modal } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PropTypes } from 'prop-types';
import locations from '../data/locations';

export default function LocationCard(props) {
  const { id, name, type, dimension, residents, image } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getLocationsAddOn = () => locations.filter((el) => el.id === id)[0];

  return (
    <div>
      {/* Card Locations */}
      <Card
        style={{ width: '20rem', height: '25rem' }}
        className="m-3 border-1 border-light rounded-3 d-flex
        flex-column justify-content-between"
      >
        {/* Image Locations */}
        <LazyLoadImage
          className="border-bottom border-light h-100 w-auto p-1
          rounded-3 overflow-hidden"
          src={image ? image : getLocationsAddOn().image}
        />
        <Card.Body
          className="text-center text-decoration-none p-1 d-flex
          flex-column justify-content-evenly align-items-center h-100"
        >
          <Card.Title className="text-truncate px-2 w-100" variant="primary">
            {name}
          </Card.Title>
          <Card.Text className="text-truncate px-2 w-100">
            {`Dimension: ${dimension}`}
          </Card.Text>
          <Card.Text className="text-truncate px-2 w-100">
            {getLocationsAddOn().description}
          </Card.Text>
          <Button className="px-2 w-50" onClick={handleShow} variant="success">
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
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>{`Id: ${id}`}</ListGroup.Item>
            <ListGroup.Item>{`Name: ${name}`}</ListGroup.Item>
            <ListGroup.Item>{`Type: ${type}`}</ListGroup.Item>
            <ListGroup.Item>{`Dimension: ${dimension}`}</ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              {`Characters : ${residents ? residents.length : ''}`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Description: ${
                getLocationsAddOn().description
                  ? getLocationsAddOn().description
                  : ''
              }`}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          {/* Button close modal */}
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

LocationCard.propTypes = {
  dimension: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  residents: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
