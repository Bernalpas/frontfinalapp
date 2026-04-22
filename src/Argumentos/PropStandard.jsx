
import { Card } from "react-bootstrap";

// importamos a otro componente hijo que es el boton
import BotonTodos from "./BotonTodos"

//recibimos props desde el componente padre
const PropStandard = (props) => {
  return (
    <>
      <Card  className="text-center mt-5">
        <Card.Body>
          <Card.Title>1. Props Standard</Card.Title>
          <h2>{props.nombre}</h2>
          <p>Rol: {props.rol}</p>
          <p>Este componente recibe props: {JSON.stringify(props)}</p>

          {/* Llamamos a otro componente hijo y le enviamos props como atributos */}
          <BotonTodos variant="danger" data="Borrar" />
        </Card.Body>
      </Card>
    </>
  )
}

export default PropStandard