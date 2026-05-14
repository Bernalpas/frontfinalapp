
// importamos directamente el componente de react-bootstrap

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useCarrito } from '../context/CarritoContext';

function Navegacion() {
  const { cantidadTotal } = useCarrito();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mi Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/props">Props Varios</Nav.Link>
            <Nav.Link href="/apiStore">Api Externa Store</Nav.Link>
            <Nav.Link href="/nuestros-productos">Nuestros Productos</Nav.Link>
            <Nav.Link href="/carrito">
              Carrito
              {cantidadTotal > 0 && (
                <Badge bg="danger" className="ms-1">{cantidadTotal}</Badge>
              )}
            </Nav.Link>
            <Nav.Link href="/old">Old App</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;