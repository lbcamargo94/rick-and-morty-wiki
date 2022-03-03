import React, { useState } from 'react'
import { Card, Button, ListGroup, Modal } from 'react-bootstrap';
import { PropTypes } from 'prop-types';


export default function EpisodesCard(props) {
  const { id, air_date, episode, created, name, characters, } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Card episodes */}
      <Card
        style={{ width: '18rem', height: '20rem' }}
        className="m-3 border-1 border-light rounded-3 d-flex flex-column justify-content-between"
      >
        {/* Image episode */}
        <Card.Img
          className="border-bottom border-light h-auto w-auto"
          src={ "" }
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
            <ListGroup.Item>
              {`Id: ${ id }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Name: ${ name }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Air Date: ${ air_date }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Episode: ${ episode }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Characters: ${ characters.length }`}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Created: ${ created }`}
            </ListGroup.Item>
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