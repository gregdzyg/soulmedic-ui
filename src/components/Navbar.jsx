import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

function NavbarApp() {
    const [showSpecDropdown, setShowSpecDropdown] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <Navbar expand="lg" className="custom-navbar">
  <Container>
    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
      <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
      <span id="brandText">SOULMEDIC</span>
    </Navbar.Brand>

    {/* Toggle burger menu */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    {/* Składane menu */}
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
      <Nav className="mx-auto text-center justify-content-center">
        <Nav.Link as={Link} to="/o-nas">O nas</Nav.Link>
                        <NavDropdown title="Specjaliści" id="specjalisci-dropdown" className="no-caret">
          <NavDropdown.Item as={Link} to="/specjalisci#psychiatra">Psychiatra</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/specjalisci#psycholog">Psycholog</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/specjalisci#psychoterapeuta">Psychoterapeuta</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/specjalisci#seksuolog">Seksuolog</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/oferta">Oferta</Nav.Link>
        <Nav.Link as={Link} to="/e-recepta">E-recepta</Nav.Link>
        <Nav.Link as={Link} to="/cennik">Cennik</Nav.Link>
        <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
      </Nav>

      {/* Przycisk zaloguj */}
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/logowanie">
          <button className="btn btn-primary">Zaloguj się</button>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default NavbarApp;