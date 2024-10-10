import { Link, useParams } from "react-router-dom"
import inventario from '../../data/productos'
import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../../context/CarritoContext"

export const Item = () => {
  const {id} = useParams()
  const [item, setItem] = useState(null)
  const {items, dispatch} = useContext(CarritoContext)
  const [quantity, setQuantity] = useState(1)
  const [isInCart, setIsInCart] = useState(false)
  //console.log(isInCart)

  useEffect(() => {
    // Convertimos id a número
    const itemId = parseInt(id, 10);
    let newItem = inventario.find(i => i.id === itemId);
    setItem(newItem);

    //verificar si el producto ya esta
    const foundInCart = items.find(i => i.id === itemId)
    if (foundInCart) {
      setIsInCart(true);
      setQuantity(foundInCart.quantity); // Establecemos la cantidad actual del carrito
    } else {
      setIsInCart(false);
      setQuantity(1); // Cantidad por defecto si no está en el carrito
    }
  }, [id, items]);

  const handleSubmit = (e) => { 
    /* RECORDAR de productos.js cada item contiene las propiedades {id: producto: src: precio: categoria:}*/
    e.preventDefault();
    let action = e.nativeEvent.submitter.value
    console.log(action)
    if(isInCart){
      if (action === "addOne") handleAdd();
      else if(action === "deleteOne") handleMinus();
      else{
        dispatch({type: "DELETE_ITEM", payload: item.id})
      }
    }
    else{
      const itemToAdd = {...item, quantity};
      dispatch({type: "ADD_ITEM", payload: itemToAdd})
    }
  }

  /* agrego el e - y dependiendo de isIncart le cambio el type attr de button a submit */
  const handleAdd = () => { 
    setQuantity(prev => Number(prev) + 1); // Asegúrate de que prev es un número
    if(isInCart){
      // Actualizamos la cantidad en el carrito
      const updatedItem = { ...item, quantity: quantity + 1 };
      dispatch({ type: "ADD_ITEM", payload: updatedItem });
    }
  }
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(prev => Number(prev) - 1); // Asegúrate de que prev es un número
      if (isInCart) {
        // Actualizamos la cantidad en el carrito
        const updatedItem = { ...item, quantity: quantity - 1 };
        dispatch({ type: "ADD_ITEM", payload: updatedItem });
      }
    }
  };

  if(!item) return <h1>Loading ...</h1>
  
  return (
    <div className="col-12 mt-3 detalles">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-center">Detalles de {item.producto}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <Link to=".." type="button" className="ms-md-5 btn btn-dark">&larr; <span>Back to store</span></Link>
        </div>
      </div>
      <div className="row mb-4 g-3 justify-content-around align-items-center">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
            <figure>
              <img src={item.src} alt={item.producto} className="single-item"/>
            </figure>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><h5>Detalles de {item.producto}</h5></li>
                <li className="list-group-item list-group-item-light">
                  <div className="d-flex justify-content-between"><h6>Precio regular</h6><h6>${item.precio}</h6></div>
                  <div className="d-flex justify-content-between"><h6>Categoria</h6><h6 className="categoria">{item.categoria}</h6></div>
                </li>
            </ul>
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="quantity d-flex align-items-center justify-content-around">
                <button 
                        type={isInCart ? "submit" : "button"} 
                        className="btn"
                        onClick={!isInCart ? handleMinus : undefined}
                        value="deleteOne">
                        <i className="bi bi-dash-circle"></i>
                </button>
                <input type="text" name="quantity" id="quantity" value={quantity} className="text-center w-50" disabled/> {/* Disable no es necesario el evento Onchange */}
                <button 
                        type={isInCart ? "submit" : "button"} 
                        className="btn" 
                        onClick={!isInCart ? handleAdd : undefined}
                        value="addOne">
                        <i className="bi bi-plus-circle"></i>
                </button>
              </div>
              <button type="submit" 
                      className={`btn ${isInCart ? "btn-danger" : "btn-success"} btn-lg w-100 mt-2`}
                      value="mainSubmitter">
                    {isInCart ? "Eliminar todas" : "Agregar al Carrito"}{" "}
                    <i className={isInCart ? "bi bi-trash-fill" : "bi bi-cart-fill"}></i></button>
            </form>
          </div>
      </div>
    </div>
  )
}

/* el button submit no ELIMINA ni se actualiza despues
add minus no actualiza el input falta un onChange
*/