import { useState, useEffect } from "react"
import { obtenerProductos, obtenerProductosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'


const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( () => {
        const funcion = idCategoria ? obtenerProductosPorCategoria : obtenerProductos;

        funcion(idCategoria)
            .then(respuesta => setProductos(respuesta))
    },[idCategoria])

    return (
        <> 
            <h2 className="saludo"> {props.saludo} </h2>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer