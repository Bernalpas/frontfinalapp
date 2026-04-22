import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState } from 'react';
import axios from "axios"

function Formulario() {

    const URL_PRODUCTO = import.meta.env.VITE_APP_URL_PRODUCTOS;

    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [descripcionProducto, setDescripcionProducto] = useState("");
    const [imagenProducto, setImagenProducto] = useState("");
    

    const enviarProducto = async (e) => {
        e.preventDefault();

        const producto = {
            nombreProducto,
            precioProducto,
            descripcionProducto,
            imagenProducto
        }

        console.log(producto)

        try {
            const response = await axios.post(`${URL_PRODUCTO}`, producto)

            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        } finally {
            console.log("");
        }
    }

    return (
        <section
        className="py-5"
        style={{
            minHeight: 'calc(100vh - 140px)',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #eef4ff 100%)',
        }}
        >
        <Container>
            <Row className="justify-content-center">
            <Col lg={8} xl={7}>
                <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                <Card.Body className="p-0">
                    <Row className="g-0">
                    <Col
                        md={5}
                        className="bg-dark text-white p-4 p-lg-5 d-flex flex-column justify-content-center"
                    >
                        <span className="text-uppercase small fw-semibold text-info mb-3">
                        Panel de carga
                        </span>
                        <h1 className="h3 fw-bold mb-3">Nuevo producto</h1>
                        <p className="mb-0 text-white-50">
                        Completá la información para agregar un producto al catálogo con una presentación clara y ordenada.
                        </p>
                    </Col>

                    <Col md={7}>
                        <div className="p-4 p-lg-5">
                        <div className="mb-4">
                            <h2 className="h4 fw-bold mb-2">Formulario de producto</h2>
                            <p className="text-muted mb-0">
                            Ingresá nombre, precio, descripción e imagen.
                            </p>
                        </div>

                        <Form onSubmit={enviarProducto}>
                            <Form.Group className="mb-3" controlId="productoNombre">
                            <Form.Label className="fw-semibold">Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                size="lg"
                                placeholder="Ej: Auriculares Pro"
                                value={nombreProducto}
                                required
                                onChange={(e)=>{setNombreProducto(e.target.value)}}
                            />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="productoPrecio">
                            <Form.Label className="fw-semibold">Precio</Form.Label>
                            <Form.Control
                                type="number"
                                size="lg"
                                placeholder="Ej: 89990"
                                value={precioProducto}
                                required
                                onChange={(e)=>{setPrecioProducto(e.target.value)}}
                            />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="productoDescripcion">
                            <Form.Label className="fw-semibold">Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Describí el producto, sus características y beneficios."
                                value={descripcionProducto}
                                onChange={(e)=>{setDescripcionProducto(e.target.value)}}
                            />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="productoImagen">
                            <Form.Label className="fw-semibold">Imagen</Form.Label>
                            <Form.Control
                                type="url"
                                size="lg"
                                placeholder="https://ejemplo.com/imagen.jpg"
                                value={imagenProducto}
                                onChange={(e)=>{setImagenProducto(e.target.value)}}
                            />
                            </Form.Group>

                            <div className="d-grid">
                            <Button variant="dark" type="submit" size="lg" className="rounded-3">
                                Guardar producto
                            </Button>
                            </div>
                        </Form>
                        </div>
                    </Col>
                    </Row>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </section>
    );
}

export default Formulario;
