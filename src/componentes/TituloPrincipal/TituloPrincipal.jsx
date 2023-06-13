// TituloPrincipal es el componente hijo de la App
const TituloPrincipal = ({titulo,dia}) => { // antes props era el parámetro y titulo era una propiedad del objeto props
    return (
        <>
            <h1> {titulo} </h1>
            <h2> Hoy es dia {dia} </h2>
        </>
    )
}

export default TituloPrincipal