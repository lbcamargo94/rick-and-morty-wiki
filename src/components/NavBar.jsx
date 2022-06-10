import React from 'react';
import { Navbar, Offcanvas, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/icons/icons8-rick-sanchez.svg';

export default function NavBar() {
  const links = [
    { title: 'Home', to: '/' },
    { title: 'Search', to: '/search' },
    { title: 'Characters', to: '/characters/1' },
    { title: 'Locations', to: '/locations/1' },
    { title: 'Episodes', to: '/episodes/1' },
  ];
  return (
    <div
      className="d-flex flex-row align-items-center
      justify-content-center w-100"
    >
      <Navbar bg="light" expand={false} className="d-flex float-end w-100">
        <Container className="d-flex flex-row flex-nowrap" fluid>
          {/* Imagem com link home */}
          <Navbar.Brand href="/">
            <img
              src={homeIcon}
              width="40"
              height="40"
              className="d-flex bg-transparent"
              alt="icons8-rick-sanchez.svg"
            />
          </Navbar.Brand>
          {/* Titulo  */}
          <Navbar.Brand className="navBarTitle fs-1 text-success w-100 text-center">
            Wubba Lubba Dub Dub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel"
            className="bg-success"
            id="offcanvasNavbar"
            placement="end"
          >
            <Offcanvas.Header className="bg-light" closeButton>
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
                {links.map((link) => (
                  <Link
                    key={link.to}
                    as={Nav}
                    className="text-decoration-none text-dark bg-light rounded
                  m-1 text-center p-2 w-100"
                    to={link.to}
                  >
                    {link.title}
                  </Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
