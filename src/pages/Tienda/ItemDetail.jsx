import { useState } from "react"

export const ItemDetail = ({docData}) => {
  const [quantity, setQuantity] = useState(1)
  const addOne = () => { 
    setQuantity(prevState => prevState + 1)
   }
  const removeOne = () => { 
    setQuantity(prevState =>Math.max(prevState - 1, 1))
  }

  let truncatedTitle = docData.title.length > 80
      ? docData.title.slice(0,80) + " . . ."
      : docData.title

  return (
    <>
      <div className="col-12 col-md-6 d-flex justify-content-center">
          <figure className="mb-0">
            <img src={docData.cloudSrc} width={200} alt={docData.title} className="item-img" />
          </figure>
      </div>
      <div className="col-12 col-sm-9 col-md-5">
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark">
            <h5>{truncatedTitle}</h5>
          </li>
          <li className="list-group-item list-group-item-light">
            <p className="mb-1 desc d-none d-sm-block">{docData.desc}</p>
          </li>
          <li className="list-group-item list-group-item-light">
            <div className="d-flex justify-content-between"><h6>Categoria</h6><h6 className="categoria">{docData.categoria}</h6></div>
            <div className="d-flex justify-content-between"><h6>Precio regular</h6><h6>${docData.price}</h6></div>
          </li>
        </ul>
        <form className="mt-4 px-2">
          <div className="quantityActions">
              <i className="bi bi-dash-circle-fill" onClick={removeOne}></i>
              <p className="mb-0 quantity w-50 text-center">{quantity}</p>
              <i className="bi bi-plus-circle-fill" onClick={addOne}></i>
          </div>
          <button type="submit" className="btn btn-success btn-lg w-100 mt-3">Add to Cart <i class="bi bi-cart-fill"></i></button>
        </form>
      </div>

     {/*  <div className="alert-wrapper">
        <div className="alert alert-warning alert-dismissible">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, sit.</p>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          // el boton solo elimina el alert no el alert-wrapper
        </div>
      </div> */}
    </>
  )
}
