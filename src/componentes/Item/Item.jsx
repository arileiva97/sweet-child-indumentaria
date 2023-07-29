import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({id, nombre, precio, imagen, stock}) => { 
    return (
        <div className="contenedorProducto">
            <img className="imagenesProductos" src={imagen} alt={nombre} />
            <h4>{nombre}</h4>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock} unidades</p>
            <p>ID: {id} <Link to={`/item/${id}`}>Ver detalles</Link></p>
        </div>
    )
}

export default Item