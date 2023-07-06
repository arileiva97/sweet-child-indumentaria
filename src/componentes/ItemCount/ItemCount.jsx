import { useState, useEffect } from "react";

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const [color, setColor] = useState("black"); 

    useEffect( () => {
        document.title = `Contador: ${contador}`;

        if(contador > 5){
            setColor("red");
        }else{
            setColor("black");
        }

    },[contador])

    const incrementar = () => {
        if(contador < stock){ // 10 sería el stock
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        if(contador == 1){
            console.log(`Ha agregado 1 item al carrito`);
        }else{
            console.log(`Ha agregado ${contador} items al carrito`);
        }
        
    }

    return (
        <div>
            <button onClick={decrementar}> - </button>
            {contador}
            <button onClick={incrementar}> + </button>
            <button onClick={agregarAlCarrito} style={{color: color}}> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount