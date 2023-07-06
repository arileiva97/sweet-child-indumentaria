import Item from "../Item/Item"
import "./ItemList.css" 

const ItemList = ({productos}) => { // se reciben los productos por props
    return (
        <div className="contenedorProductos">
            {productos.map(producto => <Item key={producto.id} {...producto} />) } 
        </div> // como hay que pasar muchas props se usa el operador ... como {...producto}
    )
}

export default ItemList