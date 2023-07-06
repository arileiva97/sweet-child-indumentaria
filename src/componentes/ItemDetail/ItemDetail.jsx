import React from 'react'

const ItemDetail = ({id, nombre, precio, imagen}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <h3>Precio: ${precio}</h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ullam ea similique. Cupiditate quidem, quas exercitationem commodi, quis rem omnis consequatur quisquam doloremque laudantium doloribus tempore eligendi quia sed expedita!</p>
            <img src={imagen} alt={nombre} />
        </div>
    )
}

export default ItemDetail