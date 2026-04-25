import { useState, useEffect } from 'react';
import axios from 'axios';
import CardTodo from '../componente/Card';

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
        <>
            <h1>Productos para la Venta</h1>
            {productos.map( producto => (
                    <CardTodo key={producto.id} productos={producto} />
                    
            ))}
        </>
    ) 
}

export default ApiStore
