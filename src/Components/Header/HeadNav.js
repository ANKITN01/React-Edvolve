import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

import './HeadNav.css';

export default function HeadNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="" className='border'>
      <Container>
        <Navbar.Brand href="#home">Edvolve</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Experience Zone</Nav.Link>
            <Nav.Link href="#pricing">Learning</Nav.Link>
            <Nav.Link href="#pricing">
              <input placeholder='Search'></input>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button>Discovery Zone</Button>
            <Nav.Link eventKey={2} href="#memes">
              Vinay
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
