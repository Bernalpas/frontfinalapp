import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';

const Registro = () => {
    // Estados
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /* const [errors, setErrors] = useState("") */

    const URL_REGISTRO = import.meta.env.VITE_APP_REGISTRO_USER;

    // Función para manejar el reseteo manual de los estados
    const handleLimpiarDatos = () => {
        setNombre("");
        setEmail("");
        setPassword("");
    };

    // Crear la función que envía los datos al backend
    const handleSubmit = async (e) => {
        e.preventDefault(); // ¡Aquí sí va el preventDefault!
        
        // 1. Creo el objeto para enviar al Backend
        const persona = {
            nombre,
            email,
            password
        };

        // 2. Envío el objeto al Backend
        try {
            const result = await axios.post(`${URL_REGISTRO}`, persona);
            
            // 3. Si todo sale bien, mostramos un mensaje de éxito
            alert(result.data.message || "¡Registro exitoso!");

            // Limpio los campos del formulario
            handleLimpiarDatos();
            
        } catch (error) {
            console.error("Error en la petición:", error);
            
            // Validación de seguridad por si el backend está caído o hay CORS
            if (error.response) {
                // El servidor respondió con un código de error (ej: 400, 500)
                alert(error.response.data.message || "Error al registrar el usuario.");
            } else if (error.request) {
                // La petición se hizo pero no hubo respuesta
                alert("No se pudo conectar con el servidor. Revisa si el backend está encendido.");
            } else {
                // Ocurrió un error al armar la petición
                alert("Ocurrió un error inesperado.");
            }
        }
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '400px' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">Registro de Usuario</Card.Title>
            
                    <Form onSubmit={handleSubmit}> 
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)} 
                                placeholder="Escribí tu nombre"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                /* Eliminado el preventDefault y simplificado */
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ejemplo@correo.com"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                /* Simplificado para mantener consistencia */
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Tu contraseña secreta"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Registrarse
                        </Button>
                        
                        {/* Cambiamos el type="reset" por type="button" y le pasamos nuestra función */}
                        <Button 
                            variant="danger" 
                            type="button" 
                            onClick={handleLimpiarDatos} 
                            className="w-100 mt-2"
                        >
                            Borrar Datos
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Registro;