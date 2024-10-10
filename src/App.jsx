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

import { Layout } from './Components/Layout';

import { Home } from './pages/home';
import { Registro } from './pages/Registro';
import { Carrito } from './pages/Carrito';

import { TiendaLayout } from './pages/Tienda/TiendaLayout';
import { ShowProductos } from './pages/Tienda/ShowProductos';
import { Item } from './pages/Tienda/Item';
import { Ingreso } from './pages/Ingreso';

const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='registro' element={<Registro />} />
      <Route path='ingreso' element={<Ingreso />} />
      <Route path='carrito' element={<Carrito />} />

      {/* Lo que pidieron para la pre-Entrega2 */}
      <Route path='tienda' element={<TiendaLayout />}>{/* Aqui usamos un Nav y Outlet */}
        <Route index element={<ShowProductos />} /> {/* Aqui mostramos Todos los productos */}
        <Route path='chompas' element={<ShowProductos />} />
        <Route path='pantalones' element={<ShowProductos />} />
        <Route path='poleras' element={<ShowProductos />} />
        <Route path='polos' element={<ShowProductos />} />
        <Route path='pijamas' element={<ShowProductos />} />

        <Route path='item/:id' element={<Item />}/>
      </Route>
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
