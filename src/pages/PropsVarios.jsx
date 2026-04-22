
import { Container, Row, Col } from "react-bootstrap";

// importamos los componentes hijos 
import PropStandard from "../Argumentos/PropStandard"; 
import PropDesectructurar from "../Argumentos/PropDesectructurar";
import PropDefault from "../Argumentos/PropsDefault";
import PropSpread from "../Argumentos/PropSpread"; 

const PropsVarios = () => {

    const estudiante = {
        curso: "Primer Año",
        carrera: "Programaciòn",
        facu: "Educaciòn IT",
        anio: 2020
    }

  return (
    <>
      <Container>
        <h1 className="text-center">Props Varios</h1>

        {/* Llamamos a Primer componente y le enviamos props sencillos como atributos */}
        <PropStandard nombre= "Pepe" rol="Devs" />

        <PropDesectructurar pais="Argentina" ciudad="Buenos Aires" />
        
        {/* Llamamos a PropDefault y le enviamos props como atributos con valores por defecto */}
        <PropDefault nombre="Pepe" />

        {/* Llamamos a la PropSpread */}
        <PropSpread {...estudiante} />
      </Container>
    </>
  )
}

export default PropsVarios
