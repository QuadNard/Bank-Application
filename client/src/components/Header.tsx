import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
     <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
        <Navbar.Brand href='/'>QuadBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='/signupscreen'>Sign Up</Nav.Link>
            <Nav.Link href='/loginscreen'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
