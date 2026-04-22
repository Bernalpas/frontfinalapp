

import { Button } from "react-bootstrap";

const BotonTodos = ({variant, data}) => {
  return (
    <>
    <Button variant={variant} className="mt-5">
        { data }
    </Button>
    </>
  )
}

export default BotonTodos