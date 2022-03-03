import React, { useState } from 'react'
import { Card, Button, ListGroup, Modal } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import episodes from '../data/episodes';


export default function EpisodesCard(props) {
  const { id, air_date, episode, created, name, characters, } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEpisodesAddOn = () => episodes.filter((el) => el.id === id)[0];

  console.log(Object.keys(getEpisodesAddOn()));

  return (
    <div>
      {/* Card episodes */}
      <Card
        style={{ width: '20rem', height: '25rem' }}
        className="m-3 border-1 border-light rounded-3 d-flex flex-column justify-content-between"
      >
        {/* Image episode */}
        <Card.Img
          className="border-bottom border-light h-auto w-auto"
          src={ getEpisodesAddOn().image }
        />
        {/* Card body */}
        <Card.Body
          className="text-center text-decoration-none"
        >
          {/* Card name title */}
          <Card.Title
            className="text-truncate"
            variant="primary"
          >
            { name }
          </Card.Title>
          {/* Card episode */}
          <Card.Text
            className="text-truncate"
          >
            { episode }
          </Card.Text>
           {/* Card air date */}
           <Card.Text
            className="text-truncate"
          >
            { air_date }
          </Card.Text>
          {/* Button open card modal */}
          <Button variant="success" onClick={ handleShow }>
          More details
          </Button>
        </Card.Body>
      </Card>

      {/* Modal card episodes */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* Header modal */}
        <Modal.Header closeButton>
          <Modal.Title>
            { name }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex">
              <div className="me-2 fw-bold">Id:</div>
              { id }
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <div className="me-2 fw-bold">Name:</div>
              { name }
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <div className="me-2 fw-bold">Air Date:</div>
              { air_date }
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <div className="me-2 fw-bold">Episode:</div>
              { episode }
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <div className="me-2 fw-bold">Characters:</div>
              { characters.length }
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <div className="me-2 fw-bold">Created:</div>
              { created }
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="me-2 fw-bold">Description:</div>
              { getEpisodesAddOn().description }
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="me-2 fw-bold">Synopsis:</div>
              { getEpisodesAddOn().synopsis }
            </ListGroup.Item>
            <ListGroup variant="flush">
              <div className="me-2 fw-bold">Deaths:</div>
              { getEpisodesAddOn().deaths
                .map((el, index) => 
                  <ListGroup.Item key={ index }>
                    { el }
                  </ListGroup.Item>
                ) }
            </ListGroup>
            <ListGroup variant="flush">
              <div className="me-2 fw-bold">Episode Errors:</div>
                { getEpisodesAddOn().eperror
                  .map((el, index) => 
                    <ListGroup.Item key={ index }>
                      { el }
                    </ListGroup.Item>
                  ) }
            </ListGroup>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer
          className="d-flex justify-content-between"
        >
          {/* Button close modal */}
          <Button 
            variant="success"
            onClick={ handleClose }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

EpisodesCard.propTypes = {
  dimension: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  residents: PropTypes.string,
  type: PropTypes.string,
}.isRequired;