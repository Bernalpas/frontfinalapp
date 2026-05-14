import { useState, useEffect } from 'react';
import axios from 'axios';
import CardTodo from '../componente/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const URL_STORE = import.meta.env.VITE_APP_API_STORE;

const ApiStore = () => {

    const [productos, setProductos ] = useState([]);

    // uso del hook de useEffect para obtener los productos del store
    //useEffect: es una llamada a la api para obtener los productos del store que se realiza antes de renderizar la pagina
    useEffect(() => {
    axios.get(`${URL_STORE}`)
        .then(response => {
            console.log(response.data); 
            setProductos(response.data)
    })
    .catch(error => console.log(error));
    }, []);


    return (
        <Container className="py-5">
            <h1 className="display-4 fw-bold text-center mb-5">Productos para la Venta</h1>
            <Row className="g-4">
                {productos.map( producto => (
                    <Col key={producto.id} md={6} lg={4}>
                        <CardTodo productos={producto} />
                    </Col>
                ))}
            </Row>
        </Container>
    ) 
}

export default ApiStore
