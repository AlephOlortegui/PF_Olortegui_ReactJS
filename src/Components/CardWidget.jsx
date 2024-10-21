import { ActiveLink } from "./ActiveLink"

export const CardWidget = () => {
  return (
    <li className="nav-item">
      <ActiveLink to="/carrito">
        <span>Carrito</span> <i className="bi bi-cart-fill"></i><span className="position-absolute top-50 translate-middle badge rounded-pill bg-danger">3</span>
      </ActiveLink>
    </li>
  )
}
