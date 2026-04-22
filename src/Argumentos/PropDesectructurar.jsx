import { Card } from "react-bootstrap";

// importamos a otro componente hijo que es el boton
import BotonTodos from "./BotonTodos"


//recibimos props desde el componente padre
const PropDesectructurar = ({pais, ciudad}) => {
  return (
    <>
      <Card className="text-center mt-5">
        <Card.Body>
          <Card.Title>2. Props Desectructurados</Card.Title>
          <h2>{pais}</h2>
          <p>Rol: {ciudad}</p>
          <p>Este componente recibe props: {JSON.stringify({pais, ciudad})}</p>
          {/* Llamamos a otro componente hijo y le enviamos props como atributos */}
          <BotonTodos variant="primary" data="Comprar" />
        </Card.Body>
      </Card>
    </>
  )
}

export default PropDesectructurar
