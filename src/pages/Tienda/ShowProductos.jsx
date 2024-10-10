import { Link, useLocation } from "react-router-dom"
import { useFilterTienda } from "./useFilterTienda"

export const ShowProductos = () => {
  const {pathname} = useLocation()
  //console.log(pathname)
  const endPoint = pathname.split("/").filter(i => i !== "").pop()
  //console.log(endPoint)
  const {productos} = useFilterTienda(endPoint)

  return (
    <div className="col-12 mt-3 mansoryLayout text-center">
      {productos.map(item => {
        const {id, producto, src} = item
        return (
          <figure className="producto mb-2" key={id}>
            <Link to={`/tienda/item/${id}`}>See {producto} Details...</Link>
            <img src={src} alt={producto} />
          </figure>
        )
      })}
    </div>
  )
}