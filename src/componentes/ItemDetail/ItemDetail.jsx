import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, imagen, stock}) => {
    
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const {agregarProducto} = useContext(CarritoContext);

    const handlerCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);        
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }
    
    return (
        <div>
            <h2>{nombre}</h2>
            <h3>Precio: ${precio}</h3>
            <h3>ID: {id}</h3>
            <p>Talles: XS - S - M - L - XL</p>
            <img src={imagen} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad}/>)
            }
        </div>
    )
}

export default ItemDetail