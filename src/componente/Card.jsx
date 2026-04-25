import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function CardTodo({productos}) {
  return (
    <Container className="flex">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productos.image} />
        <Card.Body>
            <Card.Title>{productos.title}</Card.Title>
            <Card.Text>
            {productos.description}
            </Card.Text>
            <Button variant="primary">{productos.price}</Button>
        </Card.Body>
        </Card>
    </Container>
  );
}

export default CardTodo;