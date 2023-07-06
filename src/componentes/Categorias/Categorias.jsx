import { useState, useEffect} from 'react';

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect( () => {
        document.title = `Categoría: ${categoria}`
    },[categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

    return (
        <div>
            <h4>Categoría de productos:</h4>
            <button onClick={() => handleClick("Shorts")}>Shorts</button>
            <button onClick={() => handleClick("Pantalones")}>Pantalones</button>
            <button onClick={() => handleClick("Remeras")}>Remeras</button>
            <button onClick={() => handleClick("Buzos")}>Buzos</button>
        </div>
    )
}

export default Categorias