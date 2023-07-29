import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../../services/config"
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( () => {
        const productos = idCategoria ? query(collection(db, "inventario"), where("idCat","==", idCategoria)) : collection(db,"inventario");

        getDocs(productos)
        .then(respuesta => {
            const nuevosProductos = respuesta.docs.map(doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
    },[idCategoria])

    return (
        <> 
            <h2 className="saludo"> {props.saludo} </h2>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer