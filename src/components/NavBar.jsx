import React from 'react'
import { Navbar, Offcanvas, Container,
  Nav, Form, FormControl, Button } from 'react-bootstrap';
import homeIcon from '../icons/icons8-rick-sanchez.svg';

export default function NavBar()
{
  return (
    <div
      className="d-flex flex-row align-items-center
      justify-content-center w-100"
    >
      <Navbar
        bg="light"
        expand={false}
        className="d-flex float-end w-100"
      >
        <Container fluid>
          {/* Imagem com link home */}
          <Navbar.Brand href="/">
            <img
              src={ homeIcon }
              width="40"
              height="40"
              className="d-flex bg-transparent"
              alt="icons8-rick-sanchez.svg"
            />
          </Navbar.Brand>
          {/* Titulo  */}
          <Navbar.Brand >Wubba Lubba Dub Dub</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar"/>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-success"
          >
            <Offcanvas.Header closeButton className="bg-light">
              <Offcanvas.Title
                className="text-decoration-none text-dark text-center
                h-100 w-100"
                id="offcanvasNavbarLabel"
              >
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link
                  className="text-decoration-none text-dark bg-light rounded
                  m-1 text-center w-100"
                  href="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-decoration-none text-dark bg-light rounded
                  m-1 text-center w-100"
                  href="/Characters"
                >
                  Characters
                </Nav.Link>
                <Nav.Link
                  className="text-decoration-none text-dark bg-light rounded
                  m-1 text-center w-100"
                  href="/Locations"
                >
                  Locations
                </Nav.Link>
                <Nav.Link
                  className="text-decoration-none text-dark bg-light rounded
                  m-1 text-center w-100"
                  href="/Episodes"
                >
                  Episodes
                </Nav.Link>
              </Nav>
              <Form className="d-flex m-1 w-100">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  variant="outline-light"
                >
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
