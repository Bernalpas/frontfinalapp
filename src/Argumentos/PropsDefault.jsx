import { Card } from "react-bootstrap";

// importamos a otro componente hijo que es el boton
import BotonTodos from "./BotonTodos"


//recibimos props desde el componente padre
const PropDefault = ({nombre, rol= "User"}) => {
  return (
    <>
      <Card className="text-center mt-5">
        <Card.Body>
          <Card.Title>3. Props Default</Card.Title>
          <h2>{nombre}</h2>
          <p>Rol: {rol}</p>
          <p>Este componente recibe props: {JSON.stringify({nombre, rol})}</p>
          {/* Llamamos a otro componente hijo y le enviamos props como atributos */}
          <BotonTodos variant="success" data="Default" />
        </Card.Body>
      </Card>
    </>
  )
}

export default PropDefault