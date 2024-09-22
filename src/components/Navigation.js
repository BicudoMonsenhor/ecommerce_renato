import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaStore, FaCashRegister } from 'react-icons/fa';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Loja Virtual</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products">
              <FaStore className="nav-icon" /> Produtos
            </Nav.Link>
            <Nav.Link href="/cart">
              <FaShoppingCart className="nav-icon" /> Carrinho
            </Nav.Link>
            <Nav.Link href="/checkout">
              <FaCashRegister className="nav-icon" /> Finalizar Compra
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
