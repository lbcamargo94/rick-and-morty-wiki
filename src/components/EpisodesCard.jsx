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

  console.log(getEpisodesAddOn().errors);

  return (
    <div>
      {/* Card episodes */}
      <Card
        style={{ width: '20rem', height: '25rem' }}
        className="m-3 border-1 border-light rounded-3 d-flex flex-column
        justify-content-between"
      >
        {/* Image episode */}
        <Card.Img
          className="border-bottom border-light h-100 w-auto p-1
          rounded-3"
          src={ getEpisodesAddOn().image }
        />
        {/* Card body */}
        <Card.Body
          className="text-center text-decoration-none p-1 d-flex
          flex-column justify-content-evenly align-items-center h-100"
        >
          {/* Card name title */}
          <Card.Title
            className="text-truncate px-2 w-100"
            variant="primary"
          >
            { name }
          </Card.Title>
          {/* Card episode */}
          <Card.Text
            className="text-truncate px-2 m-1"
          >
            { episode }
          </Card.Text>
           {/* Card air date */}
           <Card.Text
            className="text-truncate px-2 m-1"
          >
            { air_date }
          </Card.Text>
          {/* Button open card modal */}
          <Button
            className="px-2 w-50"
            onClick={ handleShow }
            variant="success"
          >
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
            <ListGroup.Item className="d-flex px-0">
              <div className="fw-bold">Id:</div>
              <div className="ms-2">{ id }</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex px-0">
              <div className="fw-bold">Name:</div>
              <div className="ms-2">{ name }</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex px-0">
              <div className="fw-bold">Air Date:</div>
              <div className="ms-2">{ air_date }</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex px-0">
              <div className="fw-bold">Episode:</div>
              <div className="ms-2">{ episode }</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex px-0">
              <div className="fw-bold">Characters:</div>
              <div className="ms-2">{ characters.length }</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex px-0">
              <div className="fw-bold">Created:</div>
              <div className="ms-2">{ created }</div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="fw-bold">Description:</div>
              <div className="ms-2">{ getEpisodesAddOn().description }</div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="fw-bold">Synopsis:</div>
              <div className="ms-2">{ getEpisodesAddOn().synopsis }</div>
            </ListGroup.Item>
            <ListGroup variant="flush">
              <div className="fw-bold">Deaths:</div>
              { getEpisodesAddOn().deaths
                .map((el, index) => 
                  <ListGroup.Item key={ index }>
                    { el }
                  </ListGroup.Item>
                ) }
            </ListGroup>
            <ListGroup variant="flush">
              <div className="me-2 fw-bold px-0">Episode Errors:</div>
                { [...getEpisodesAddOn().errors]
                  .map((el, index) => 
                    <ListGroup.Item key={ index }>
                      { el }
                    </ListGroup.Item>
                  ) }
            </ListGroup>
            <ListGroup variant="flush">
              <div className="me-2 fw-bold">Locations:</div>
                { [...getEpisodesAddOn().locations]
                  .map((el, index) => 
                    <ListGroup.Item key={ index }>
                      { el }
                    </ListGroup.Item>
                  ) }
            </ListGroup>
            <ListGroup variant="flush">
              <div className="me-2 fw-bold">Songs:</div>
                { [...getEpisodesAddOn().songs]
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