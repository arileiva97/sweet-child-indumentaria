import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <Link to='/'>
                <h1 className='tituloHeader'>Sweet Child Indumentaria</h1>
            </Link>
            
            <nav>
                <ul>
                    <li>
                        <NavLink to='/categoria/1'>Shorts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/2'>Pantalones</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/3'>Remeras</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/4'>Buzos</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar