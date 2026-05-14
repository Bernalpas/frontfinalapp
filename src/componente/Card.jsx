import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTodo({productos}) {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={productos.image}
        alt={productos.title}
        style={{ height: '240px', objectFit: 'contain', padding: '1rem' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{productos.title}</Card.Title>
        <Card.Text className="text-muted flex-grow-1" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {productos.description}
        </Card.Text>
        <h5 className="text-primary fw-bold mb-3">
          ${Number(productos.price).toFixed(2)}
        </h5>
        <Button variant="dark" className="mt-auto">
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardTodo;