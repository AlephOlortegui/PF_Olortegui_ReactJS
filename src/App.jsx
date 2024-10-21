import './App.scss'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Registro } from './pages/Registro';
import { Ingreso } from './pages/Ingreso';
import { Carrito } from './pages/Carrito';
import { Tienda } from './pages/Tienda/Tienda';
import { ItemDetailContainer } from './pages/Tienda/ItemDetailContainer';


import { NotFound } from './pages/NotFound';

/* 
  Checkout es <Carrito />
  ItemListContainer es <Tienda />
*/

const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='registro' element={<Registro />}/>
      <Route path='ingreso' element={<Ingreso />}/>
      <Route path='carrito' element={<Carrito />}/> 
      <Route path='tienda' element={<Tienda />}/>
      <Route path='tienda/:id' element={<ItemDetailContainer />}/>

      <Route path='*' element={<NotFound />}/>
  </Route>
)

const router = createBrowserRouter(routes)
// <Routes>. . .</Routes>  <>  RouterProvider

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
