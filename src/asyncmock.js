const productos = [
    {id: "1", nombre: "Shorts floreados", precio: 8000, imagen: '../images/Shorts/shorts1.webp', idCat: "1"},
    {id: "2", nombre: "Shorts negros", precio: 6500, imagen: '../images/Shorts/shorts2.webp', idCat: "1"},
    {id: "3", nombre: "Shorts naranjas", precio: 10000, imagen: '../images/Shorts/shorts3.webp', idCat: "1"},
    {id: "4", nombre: "Shorts verde agua", precio: 10000, imagen: '../images/Shorts/shorts4.webp', idCat: "1"},
    {id: "5", nombre: "Pantalones beige", precio: 20000, imagen: '../images/Pantalones/pantalones1.jpg', idCat: "2"},
    {id: "6", nombre: "Pantalones grises", precio: 13000, imagen: '../images/Pantalones/pantalones2.jpg', idCat: "2"},
    {id: "7", nombre: "Pantalones jeans azules", precio: 18000, imagen: '../images/Pantalones/pantalones3.webp', idCat: "2"},
    {id: "8", nombre: "Pantalones marrones", precio: 21000, imagen: '../images/Pantalones/pantalones4.jpg', idCat: "2"},
    {id: "9", nombre: "Remera blanca", precio: 5000, imagen: '../images/Remeras/remera1.jpg', idCat: "3"},
    {id: "10", nombre: "Remera negra", precio: 9000, imagen: '../images/Remeras/remera2.webp', idCat: "3"},
    {id: "11", nombre: "Remera negra-celeste", precio: 10000, imagen: '../images/Remeras/remera3.webp', idCat: "3"},
    {id: "12", nombre: "Remera gris", precio: 5000, imagen: '../images/Remeras/remera4.jpeg', idCat: "3"},
    {id: "13", nombre: "Buzo gris", precio: 15000, imagen: '../images/Buzos/buzo1.jpg', idCat: "4"},
    {id: "14", nombre: "Buzo multicolor", precio: 17000, imagen: '../images/Buzos/buzo2.webp', idCat: "4"},
    {id: "15", nombre: "Buzo tricolor", precio: 12000, imagen: '../images/Buzos/buzo3.jpg', idCat: "4"},
    {id: "16", nombre: "Buzo azul", precio: 18000, imagen: '../images/Buzos/buzo4.jpg', idCat: "4"}
]

export const obtenerProductos = () => { // el export sirve para permitir que la función este disponible para toda la aplicación 
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 100)   // para retornar el array de productos con un delay de dos segundos para emular un retraso de conexión
    })
}

// Para crear una nueva función similar a la anterior pero que retorne un solo item
export const obtenerUnSoloProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productoBuscado = productos.find(producto => producto.id === id);
            resolve(productoBuscado);
        }, 100)
    })
}

// Para crear una función que retorna un array de una determinada categoría de producto
export const obtenerProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(producto => producto.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}