import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, imagen}) => { // se recibe cada propiedad de los productos
    return (
        <div className="contenedorProducto">
            <img className="imagenesProductos" src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>ID: {id} <Link to={`/item/${id}`}>Ver detalles</Link></p>
            
        </div>
    )
}

export default Item