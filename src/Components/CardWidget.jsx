import { useContext, useEffect, useState } from "react"
import { ActiveLink } from "./ActiveLink"
import { CarritoContext } from "../context/CarritoContext"

export const CardWidget = () => {
  const {items} = useContext(CarritoContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let len = items.length;
    setTotal(len);
  }, [items])
  
  return (
    <li className="nav-item">
      <ActiveLink to="/carrito">
        <span>Carrito</span> <i className="bi bi-cart-fill"></i><span className="position-absolute top-50 translate-middle badge rounded-pill bg-danger">{total}</span>
      </ActiveLink>
    </li>
  )
}
