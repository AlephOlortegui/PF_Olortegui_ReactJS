import { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const Carrito = () => {
  const {items, dispatch} = useContext(CarritoContext)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let newTotal = items.reduce((acc,curr) => {
      //acc = 0
        let precio = curr.precio;
        let cantidad = curr.quantity;
        acc = acc + (precio * cantidad);
        return acc
    },0)
    //console.log(newTotal)
    newTotal = newTotal.toFixed(2);
    setTotal(newTotal)
  }, [items])

  const handleDelete = (id) => { 
    dispatch({type: "DELETE_ITEM", payload: id})
   }

  let tableRows = items.map(item => (
    <tr data-aos="fade-down" key={item.id}>
        <td className="producto">
          <figure>
            <img src={item.src} className="img-thumbnail" alt={item.producto} />
            <figcaption>{item.producto}</figcaption>
          </figure>
        </td>
        <td>${item.precio}</td>
        <td className='quantityActions'>
          <div>
            <span><i className="bi bi-plus-circle"></i></span>
            <span>{item.quantity}</span>
            <span><i className="bi bi-dash-circle"></i></span>
          </div>
        </td>
        <td>${(item.precio)*(item.quantity)}</td>
        <td className='deleteIcon'><i className="bi bi-trash-fill" onClick={() => handleDelete(item.id)}></i></td>
    </tr>
  ))
  
  return (
    <div className="container mt-3 carrito">
    <div className="row mb-5">
      <div className="col-12">
        <h1 className="text-center">Su Carrito</h1>
      </div>
    </div>
    <div className="row mb-4 g-3">
        <div className="col-12 col-md-8">
          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-4">
          <div className="box-total" data-aos="fade-up">
            <div className="sumary">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><h5>Resumen de la compra</h5></li>
                <li className="list-group-item list-group-item-light">
                  <div className="d-flex justify-content-between"><h6>Subtotal</h6><h6>${total}</h6></div>
                  <div className="d-flex justify-content-between"><h6>Delivery</h6><h6 className="text-success">Gratis</h6></div>
                </li>
                <li className="list-group-item list-group-item-dark d-flex justify-content-between">
                  <h6>Total</h6><h6>${total}</h6>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-success btn-lg w-100 mt-2">Pagar</button>
          </div>
        </div>
    </div>
    </div>
  )
}
