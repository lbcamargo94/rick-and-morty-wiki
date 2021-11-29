import React from 'react'
import { Navbar, Offcanvas, Container,
  Nav, Form, FormControl, Button } from 'react-bootstrap';
import homeIcon from '../icons/icons8-rick-sanchez.svg';

export default function NavBar()
{
  return (
    <div
      className="d-flex flex-row align-items-center
      justify-content-center w-100 "
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
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Characters">Characters</Nav.Link>
                <Nav.Link href="/Locations">Locations</Nav.Link>
                <Nav.Link href="/Episodes">Episodes</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Procurar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Procurar</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
