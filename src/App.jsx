import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* import NavBar from './componentes3/NavBar/NavBar';
import Computadoras from './componentes3/Computadoras/Computadoras';
import Celulares from './componentes3/Celulares/Celulares';
import Sillas from './componentes3/Sillas/Sillas';
import Home from './componentes3/Home/Home'; */
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Categorias from './componentes/Categorias/Categorias';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
/* import Articulos from './componentes/Articulos/Articulos';
import CustomHooks from './Hooks/CustomHooks';
import Mensaje from './componentes/Patrones/Mensaje';
import { mensajeConTitulo } from './componentes/Patrones/Hoc';
import Producto from './componentes/Patrones/Producto';
import { conAumento } from './componentes/Patrones/Hoc';
import LogIn from './componentes/Patrones/LogIn'; */

import './App.css'; 

const App = () => { 
  /* const NuevoComponente = mensajeConTitulo(Mensaje);
  const NuevoProducto = conAumento(Producto); */

  return ( 
    <>
{/*       <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/computadoras' element={<Computadoras/>}/>
          <Route path='/celulares' element={<Celulares/>}/>
          <Route path='/sillas/:id' element={<Sillas/>}/> 
          <Route path='/' element={<Home/>}/> 
          <Route path='*' element={<h2>Sitio en construcción</h2>}/>
        </Routes>
      </BrowserRouter> */}


      {/* <CustomHooks/>
      <NuevoComponente/>
      <NuevoProducto nombre="Paltas" precio={700}/>
      <LogIn/> */}

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Sweet Child :)"/>}></Route>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}></Route>
          <Route path='/item/:idItem' element={<ItemDetailContainer saludo="Bienvenidos a Sweet Child :)"/>}></Route>
          <Route path='*' element={<h2>Sitio en Construcción</h2>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
