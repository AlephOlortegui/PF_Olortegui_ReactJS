import { CardWidget } from "./CardWidget";
import { Link, useLocation } from "react-router-dom";
import { ActiveLink } from "./ActiveLink";

export const NavBar = () => {

  const { pathname } = useLocation();

  // Definimos un objeto que mapea las rutas a sus correspondientes textos y enlaces.
  const formMapping = {
    '/registro': { text: 'Registrate', link: '/registro' },
    '/ingreso': { text: 'Log in', link: '/ingreso' },
  };

  // Usamos el pathname actual para obtener el texto y el enlace correspondientes.
  // Si el pathname no está en formMapping, se usan los valores por defecto.
  const { text: formText = 'Registrate', link: formLink = '/registro' } = formMapping[pathname] || {};
  /* const {text: datoNuevo} = unObjeto;, estás haciendo "aliasing", 
  es decir, le das un nuevo nombre a la propiedad text */

  return (
    <nav className="navbar navbar-expand-sm px-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-center position-relative me-4">
            <p className="title mb-0">El Fachero</p>
            <p className="sub-title mb-0">shopping</p>
            <span className="position-absolute translate-middle badge">
              <i className="bi bi-shop"></i>
            </span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse pt-2" id="myNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-sm-center justify-content-md-start">
              <li className="nav-item">
                <ActiveLink to="/">Inicio</ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink to="/tienda">Tienda <i className="bi bi-shop-window"></i></ActiveLink>
              </li>
              <li className="nav-item ">
                <ActiveLink to={formLink}>{formText} <i className="bi bi-person-circle"></i></ActiveLink>
              </li>
              <CardWidget />
            </ul>
          </div>
          
        </div>
    </nav>
  )
}