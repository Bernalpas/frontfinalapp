

import { Card } from "react-bootstrap";

// importamos a otro componente hijo que es el boton
import BotonTodos from "./BotonTodos"


//recibimos props desde el componente padre
const PropSpread = ({curso, carrera, facu, anio = 2026}) => {
  return (
    <>
      <Card className="text-center mt-5">
        <Card.Body>
          <Card.Title>3. Props Spread</Card.Title>
          <h2>Curso: {curso}</h2>
          <p>Carrera: {carrera}</p>
          <p>Facu: {facu}</p>
          <p>Año: {anio}</p>
          <p>Este componente recibe props: {JSON.stringify({curso, carrera, facu, anio})}</p>
          <p>El estudiante se matriculó en el año {anio}</p>
          {/* Llamamos a otro componente hijo y le enviamos props como atributos */}
          <BotonTodos variant="success" data="Default" />
        </Card.Body>
      </Card>
    </>
  )
}

export default PropSpread