import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useCarrito } from '../context/CarritoContext';

const Carrito = () => {
  const { items, sumarCantidad, restarCantidad, eliminar, vaciar, total } = useCarrito();

  const handleComprar = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Compra realizada!',
      text: 'Gracias por tu compra. Recibirás un correo con los detalles.',
      confirmButtonColor: '#198754',
    });
    vaciar();
  };

  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold text-center mb-5">Carrito de Compras</h1>

      {items.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted fs-5">El carrito está vacío</p>
        </div>
      ) : (
        <>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th style={{ width: '70px' }}>Imagen</th>
                <th>Producto</th>
                <th style={{ width: '130px' }}>Precio</th>
                <th style={{ width: '160px' }}>Cantidad</th>
                <th style={{ width: '130px' }}>Subtotal</th>
                <th style={{ width: '90px' }}></th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {items.map((p) => (
                <tr key={p._id}>
                  <td>
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                    />
                  </td>
                  <td className="fw-semibold">{p.nombre}</td>
                  <td>${Number(p.precio).toLocaleString()}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2 justify-content-center">
                      <Button variant="outline-secondary" size="sm" onClick={() => restarCantidad(p._id)}>
                        −
                      </Button>
                      <span className="fw-bold fs-5" style={{ minWidth: '30px', textAlign: 'center' }}>
                        {p.cantidad}
                      </span>
                      <Button variant="outline-secondary" size="sm" onClick={() => sumarCantidad(p._id)}>
                        +
                      </Button>
                    </div>
                  </td>
                  <td className="fw-bold">${(Number(p.precio) * p.cantidad).toLocaleString()}</td>
                  <td className="text-center">
                    <Button variant="outline-danger" size="sm" onClick={() => eliminar(p._id)}>
                      ✕
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Row className="justify-content-end">
            <Col md={4}>
              <div className="bg-light p-4 rounded-3 shadow-sm">
                <h4 className="fw-bold mb-3">Resumen</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Productos:</span>
                  <span>{items.length}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3 fs-5">
                  <span className="fw-bold">Total:</span>
                  <span className="fw-bold text-primary">${total.toLocaleString()}</span>
                </div>
                <div className="d-grid gap-2">
                  <Button variant="success" size="lg" onClick={handleComprar}>
                    Comprar
                  </Button>
                  <Button variant="outline-danger" onClick={vaciar}>
                    Vaciar carrito
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Carrito;
