import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/CheckOut/CheckOut';
import './App.css'; 

const App = () => { 

  return ( 
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Sweet Child :)"/>}></Route>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}></Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer saludo="Bienvenidos a Sweet Child :)"/>}></Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h2>Sitio en Construcción</h2>}></Route>
          </Routes> 
        </CarritoProvider>
      </BrowserRouter> 
    </>

    
  )
}

export default App
