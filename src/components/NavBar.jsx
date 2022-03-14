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
        <Container
          className="d-flex flex-row flex-nowrap"
          fluid
        >
          {/* Imagem com link home */}
          <Navbar.Brand
            href="/"
          >
            <img
              src={ homeIcon }
              width="40"
              height="40"
              className="d-flex bg-transparent"
              alt="icons8-rick-sanchez.svg"
            />
          </Navbar.Brand>
          {/* Titulo  */}
          <Navbar.Brand
            className="navBarTitle fs-1 text-success w-100 text-center"
          >
            Wubba Lubba Dub Dub
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel"
            className="bg-success"
            id="offcanvasNavbar"
            placement="end"
          >
            <Offcanvas.Header
              className="bg-light"
              closeButton
            >
              <Offcanvas.Title
                className="text-decoration-none text-dark text-center
                h-100 w-100"
                id="offcanvasNavbarLabel"
              >
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex m-1 w-100">
                <FormControl
                  aria-label="Search"
                  className="me-2"
                  placeholder="Search"
                  type="search"
                />
                <Button
                  onClick={ "" }
                  variant="outline-light"
                >
                  Search
                </Button>
              </Form>
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
