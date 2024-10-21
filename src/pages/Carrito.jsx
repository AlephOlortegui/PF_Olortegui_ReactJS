import { Mapa } from "../components"

export const Carrito = () => {
  return (
    <div className="container-fluid mt-3 carrito">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-center">Su Carrito</h1>
        </div>
      </div>
      <div className="row mb-4 g-3 px-3">
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
                {/* {tableRows} */}
                <tr>
                  <td className="producto text-center">
                    <figure>
                      <img src="https://i.pinimg.com/564x/c2/a8/de/c2a8dea9281b4bd4e91d8c8c59362c34.jpg" width={200} alt="asd" />
                      <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repudiandae.</figcaption>
                    </figure>
                  </td>
                  <td>$9.85</td>
                  <td className="quantityActions">
                    <div>
                      <span><i className="bi bi-plus-circle-fill"></i></span>
                      <span>1</span>
                      <span><i className="bi bi-dash-circle-fill"></i></span>
                    </div>
                  </td>
                  <td>$9.85</td>
                  <td className="deleteIcon">
                    <i class="bi bi-trash-fill"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-md-4 text-center" data-aos="fade-up">
            <div className="box-total">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><h5>Resumen de la compra</h5></li>
                <li className="list-group-item list-group-item-light">
                  <div className="d-flex justify-content-between"><h6>Subtotal</h6><h6>$999.99</h6></div>
                  <div className="d-flex justify-content-between"><h6>Fachero Pay <i class="bi bi-credit-card-fill"></i></h6><h6>$899.99</h6></div>
                  <div className="d-flex justify-content-between"><h6>Delivery <i class="bi bi-truck"></i></h6><h6 className="text-success">Gratis</h6></div>
                </li>
                <li className="list-group-item list-group-item-dark d-flex justify-content-between">
                  <h6>Total</h6><h6>$999.99</h6>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-success btn-lg w-50 mt-2">Pagar</button>
          </div>
      </div>
      <Mapa />
    </div>
  )
}
