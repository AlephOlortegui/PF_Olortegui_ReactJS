import { Outlet, useParams } from 'react-router-dom'
import { useGetTiendaCategorias } from './useGetTiendaCategorias'
import { ActiveLink, Mapa } from '../../Components'

export const TiendaLayout = () => {
  const {id} = useParams()
  //console.log(id) // si no existe saldra "undefined" 

  const {categoriaLinks} = useGetTiendaCategorias()

  return (
    <div className="container-fluid tienda">
      <div className="row pb-4">
        {!id && (
          <div className="col-12 pt-3 pb-2 tiendaMenu">
            <h1 className="text-center">Nuestros Productos</h1>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <ActiveLink to="." end>Todos</ActiveLink>
              </li>
              {categoriaLinks.map((i,index) => (
                <li className="nav-item" key={index}>
                  <ActiveLink to={i}>{i}</ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Outlet />
      </div>
      <Mapa />
    </div>
  )
}
