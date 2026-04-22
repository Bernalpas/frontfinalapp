import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

// import de los estados de react
import { useState } from 'react';
// importamos axios para los métodos http
import axios from "axios";
// importamos un hook de las rutas para la redirección
import { useNavigate } from "react-router-dom";

function Login() {
  // iicializamos los estdos
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  // inicializo el hook de la redirección
  const navigate = useNavigate();

  // importamos la ruta del back para el login
  const URL = import.meta.env.VITE_APP_LOGIN_URL



  const handleSubmit = async (e) =>{
    e.preventDefault();

    // enviamos los datos al backend
    try {
      const response = await axios.post(`${URL}`, { email, password })
      console.log(response)
      const data = response.data
      console.log(data.message)

      if(response.status === 200) {
        //redirecciona al admin
        navigate('/admin')
      }
    } catch (error) {
      console.error(error);
    } finally{
      navigate("/")
    }
  }
  
  return (
    <section
      className="py-5"
      style={{
        minHeight: 'calc(100vh - 140px)',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9f2ff 100%)',
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={10} lg={8} xl={6}>
            <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
              <Card.Body className="p-0">
                <Row className="g-0">
                  <Col md={5} className="bg-dark text-white p-4 p-lg-5 d-flex flex-column justify-content-center">
                    <span className="text-uppercase small fw-semibold text-info mb-3">
                      Bienvenido
                    </span>
                    <h1 className="h3 fw-bold mb-3">Ingresá a tu cuenta</h1>
                    <p className="mb-0 text-white-50">
                      Accedé con tu email y contraseña para continuar comprando de forma rápida y segura.
                    </p>
                  </Col>

                  <Col md={7}>
                    <div className="p-4 p-lg-5">
                      <div className="mb-4">
                        <h2 className="h4 fw-bold mb-2">Login</h2>
                        <p className="text-muted mb-0">
                          Completá tus datos para ingresar.
                        </p>
                      </div>

                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="loginEmail">
                          <Form.Label className="fw-semibold">Email</Form.Label>
                          <Form.Control
                            type="email"
                            size="lg"
                            placeholder="nombre@correo.com"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                          <Form.Label className="fw-semibold">Contraseña</Form.Label>
                          <Form.Control
                            type="password"
                            size="lg"
                            placeholder="Ingresá tu contraseña"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                          />
                        </Form.Group>

                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <Form.Check
                            type="checkbox"
                            id="rememberUser"
                            label="Recordarme"
                          />
                          <a href="/" className="text-decoration-none fw-semibold">
                            ¿Olvidaste tu contraseña?
                          </a>
                        </div>

                        <Button variant="dark" type="submit" size="lg" className="w-100 rounded-3">
                          Ingresar
                        </Button>
                        <Button variant="danger" type="reset" size="lg" className="w-100 rounded-3 mt-3">
                          Borrar Datos
                        </Button>
                        <Button variant="success" size="lg" className="w-100 rounded-3 mt-3">
                          <Link to="/registro" text="text-white">
                            Registro
                          </Link>
                        </Button>
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

export default Login;
