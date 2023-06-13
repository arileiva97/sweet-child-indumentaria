import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
    return (
        <div>
            <img className="imgCarrito" src={imgCarrito} alt="Carrito de compras"/>
            <strong> 10 </strong> 
        </div>
    ) // el 10 es un número harcodeado que simula ser la cantidad de productos seleccionados
}

export default CartWidget