import './App.css'; 
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
const App = () => { 
  return ( 
    <>
      <NavBar/>
      <ItemListContainer saludo="Bienvenidos a la tienda de Sweet Child :)"/>
    </>
  )
}

export default App
