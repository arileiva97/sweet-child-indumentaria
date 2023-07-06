import { useState, useEffect } from 'react';
import { obtenerUnSoloProducto } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        obtenerUnSoloProducto(idItem)
            .then(resultado => setProducto(resultado))
    },[idItem])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer