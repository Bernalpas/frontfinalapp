import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const productos = [
  {
    id: 1,
    nombre: 'Auriculares Pro',
    precio: '$89.990',
    imagen: 'https://picsum.photos/seed/auriculares/400/300',
  },
  {
    id: 2,
    nombre: 'Smartwatch Active',
    precio: '$129.990',
    imagen: 'https://picsum.photos/seed/smartwatch/400/300',
  },
  {
    id: 3,
    nombre: 'Notebook Air',
    precio: '$699.990',
    imagen: 'https://picsum.photos/seed/notebook/400/300',
  },
  {
    id: 4,
    nombre: 'Cámara 4K',
    precio: '$249.990',
    imagen: 'https://picsum.photos/seed/camara/400/300',
  },
  {
    id: 5,
    nombre: 'Zapatillas Urban',
    precio: '$59.990',
    imagen: 'https://picsum.photos/seed/zapatillas/400/300',
  },
  {
    id: 6,
    nombre: 'Mochila Premium',
    precio: '$44.990',
    imagen: 'https://picsum.photos/seed/mochila/400/300',
  },
  {
    id: 7,
    nombre: 'Teclado Mecánico',
    precio: '$79.990',
    imagen: 'https://picsum.photos/seed/teclado/400/300',
  },
  {
    id: 8,
    nombre: 'Silla Gamer',
    precio: '$189.990',
    imagen: 'https://picsum.photos/seed/silla/400/300',
  },
  {
    id: 9,
    nombre: 'Parlante Bluetooth',
    precio: '$69.990',
    imagen: 'https://picsum.photos/seed/parlante/400/300',
  },
];

const Home = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Tienda Online</h1>
        <p className="lead text-muted">
          Descubrí productos destacados con diseño, tecnología y estilo para todos los días
        </p>
        <Button variant="primary" size="lg">
          Ver ofertas
        </Button>
      </div>

      <Row className="g-4">
        {productos.map((producto) => (
          <Col key={producto.id} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={producto.imagen}
                alt={producto.nombre}
                style={{ height: '240px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text className="text-muted mb-3">
                  Producto ideal para quienes buscan calidad, buen precio y entrega rápida.
                </Card.Text>
                <h5 className="text-primary fw-bold mb-3">{producto.precio}</h5>
                <Button variant="dark" className="mt-auto">
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
