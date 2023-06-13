import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1 className='tituloHeader'>Sweet Child Indumentaria</h1>
            <nav>
                <ul>
                    <li>Conjuntos</li>
                    <li>Shorts</li>
                    <li>Pantalones</li>
                    <li>Remeras</li>
                    <li>Vestidos</li>
                    <li>Buzos</li>
                    <li>Camperas</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar