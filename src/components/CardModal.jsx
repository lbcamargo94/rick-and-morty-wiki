import React from 'react'
import {
  Modal,
  Button,
  Image,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export default function CardModal(props) {
  const { gender, id, image, location, name, origin, species,
    status, type, onHide } = props;
  
  return (
    <Modal
      {...props}
      size="midle"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { name }
        </Modal.Title>
      </Modal.Header>
      <Image
            alt={ name }
            className="border-bottom border-light h-25 w-100 p-1 rounded"
            src={ image }
            variant="top"
          />
      <Modal.Body>
        <ListGroup className="list-group-flush">
          { gender && <ListGroupItem>Gender: { gender }</ListGroupItem> }
          { id && <ListGroupItem>Id: { id }</ListGroupItem> }
          { location && <ListGroupItem>Location: { location.name }</ListGroupItem> }
          { name && <ListGroupItem>Name: { name }</ListGroupItem> }
          { origin && <ListGroupItem>Origin: { origin.name }</ListGroupItem> }
          { species && <ListGroupItem>Species: { species }</ListGroupItem> }
          { status && <ListGroupItem>Status: { status }</ListGroupItem> }
          { type && <ListGroupItem>Type: { type }</ListGroupItem> }
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={ onHide }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

CardModal.propTypes = {
  gender: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.object,
  origin: PropTypes.object,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  type: PropTypes.string,
  onHide: PropTypes.func,
}.isRequired;