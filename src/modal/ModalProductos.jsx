import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ModalProductos() {
  const [inputValue, setInputValue] = useState('')

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Input something</i>,
      input: 'text',
      inputValue,
      preConfirm: () => {
        setInputValue(Swal.getInput()?.value || '')
      },
    })
  }

  return (
    <>
      {showSwal()}
    </>
  )
}


export default ModalProductos