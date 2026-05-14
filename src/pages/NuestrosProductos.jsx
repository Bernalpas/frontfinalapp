import { useState, useEffect, startTransition } from 'react';
import axios from 'axios';
import { Container, Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useCarrito } from '../context/CarritoContext';

const API_URL = import.meta.env.VITE_APP_API_URL_PRODUCTOS;

const NuestrosProductos = () => {
  const { agregar } = useCarrito();
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    nombreProducto: '',
    precioProducto: '',
    descripcionProducto: '',
    imagenProducto: '',
  });

  const listarProductos = async () => {
    try {
      const res = await axios.get(`${API_URL}/listarProductos`);
      startTransition(() => setProductos(res.data.productos));
    } catch (error) {
      console.error('Error al listar productos:', error);
    }
  };

  useEffect(() => {
    listarProductos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const abrirEditar = (producto) => {
    setEditando(producto._id);
    setForm({
      nombreProducto: producto.nombre || '',
      precioProducto: producto.precio || '',
      descripcionProducto: producto.descripcion || '',
      imagenProducto: producto.imagen || '',
    });
    setShowModal(true);
  };

  const handleEditar = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/actualizarProducto/${editando}`, form);
      Swal.fire({ icon: 'success', title: 'Actualizado', text: 'Producto actualizado correctamente' });
      setShowModal(false);
      setEditando(null);
      listarProductos();
    } catch (error) {
      console.error('Error al editar:', error);
      Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo actualizar el producto' });
    }
  };

  const handleEliminar = (id) => {
    Swal.fire({
      title: '¿Eliminar producto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API_URL}/eliminarProducto/${id}`);
          Swal.fire({ icon: 'success', title: 'Eliminado', text: 'Producto eliminado correctamente' });
          listarProductos();
        } catch (error) {
          console.error('Error al eliminar:', error);
          Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo eliminar el producto' });
        }
      }
    });
  };

  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold text-center mb-5">Nuestros Productos</h1>

      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th style={{ width: '80px' }}>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th style={{ width: '280px' }}>Acciones</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {productos.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-muted py-4">
                No hay productos cargados
              </td>
            </tr>
          ) : (
            productos.map((p) => (
              <tr key={p._id}>
                <td>
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                </td>
                <td className="fw-semibold">{p.nombre}</td>
                <td>${Number(p.precio).toLocaleString()}</td>
                <td className="text-muted" style={{ maxWidth: '250px' }}>
                  <span
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {p.descripcion}
                  </span>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <Button variant="outline-success" size="sm" onClick={() => agregar(p)}>
                      + Carrito
                    </Button>
                    <Button variant="outline-primary" size="sm" onClick={() => abrirEditar(p)}>
                      Editar
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleEliminar(p._id)}>
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => { setShowModal(false); setEditando(null); }} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditar}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    name="nombreProducto"
                    value={form.nombreProducto}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    name="precioProducto"
                    type="number"
                    value={form.precioProducto}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descripcionProducto"
                value={form.descripcionProducto}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL de la Imagen</Form.Label>
              <Form.Control
                name="imagenProducto"
                value={form.imagenProducto}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => { setShowModal(false); setEditando(null); }}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default NuestrosProductos;
