import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Alert } from "../../components/Alert"

export const ItemDetail = ({docData, docID}) => {
  const {items, dispatch} = useContext(CarritoContext)
  const [quantity, setQuantity] = useState(1)
  const [isInCart, setIsInCart] = useState(false)
  // Alerts
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClass, setAlertClass] = useState("");

  const setAlert = (message, type) => {
    setShowAlert(true);
    setAlertMessage(message);
    setAlertClass(type);
  };
  const closeAlert = () => setShowAlert(false);

  useEffect(() => {
    //verificar si el producto ya esta en el carrito
    const foundIt = items.find(i=> i.id === docID)
    if(foundIt){
      setIsInCart(true);
      setQuantity(Number(foundIt.quantity));
    }
    else{
      setIsInCart(false)
      setQuantity(1);
    }
  }, [items])
  

  const addOne = () => { 
    const currentQuantity = Number(quantity); 
    if (currentQuantity  < docData.stock) {
      const newQuantity = currentQuantity  + 1;
      setQuantity(newQuantity);
  
      if (isInCart) {
        // Crear un objeto actualizado sin exceder el stock
        const updatedItem = { ...docData, id: docID, quantity: newQuantity };
        dispatch({ type: "ADD_ITEM", payload: updatedItem });
      }
    }
  }

  /* const removeOne = () => { 
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    if(isInCart){
      // Actualizar/sobreescribir la prop Quantity
      const updatedItem = {...docData, id: docID, quantity: quantity - 1}
      dispatch({ type: "ADD_ITEM", payload: updatedItem }); //enviamos ese obj -- pasemos al reducer
    }
  } */

  const removeOne = () => {
    const currentQuantity = Number(quantity);
  
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setQuantity(newQuantity);
  
      if (isInCart) {
        const updatedItem = { ...docData, id: docID, quantity: newQuantity };
        dispatch({ type: "ADD_ITEM", payload: updatedItem });
      }
    }
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    let action = e.nativeEvent.submitter.value;
    const {cloudSrc, title, price} = docData;

    if(isInCart){
      console.log('esta en carrito - action: ',action)
      if(action === "addOne") {
        addOne();
      }
      else if(action === "removeOne") {
        removeOne();
      }
      else {
        dispatch({type: "DELETE_ITEM", payload: docID})
        setAlert("El producto ha sido eliminado!","primary")
      }
    }
    else{
      const itemToAdd = {id: docID, cloudSrc, title, price, quantity};
      dispatch({type: "ADD_ITEM", payload: itemToAdd})
      setAlert("EL producto ha sido agregado exitosamente","success")
    }
  }

  let truncatedTitle = docData.title.length > 80
      ? docData.title.slice(0,80) + " . . ."
      : docData.title

  return (
    <>
      {/* alert */}
      {showAlert && <Alert alertMessage={alertMessage} alertClass={alertClass} closeAlert={closeAlert}/>}

      <div className="col-12 col-md-6 d-flex justify-content-center">
          <figure className="mb-0">
            <img src={docData.cloudSrc} alt={docData.title} className="item-img" />
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
        <form className="mt-4 px-2" onSubmit={handleSubmit}>
          <div className="quantityActions">
            <button className="btn" 
                    type={isInCart ? "submit" : "button"}
                    value="removeOne"
                    // onClick={removeOne}
                    onClick={!isInCart ? removeOne : undefined}>
              <i className="bi bi-dash-circle-fill"></i>
            </button>
              <p className="mb-0 quantity w-50 text-center">{quantity}</p>
            <button className="btn" 
                    type={isInCart ? "submit" : "button"}
                    value="addOne"
                    //onClick={addOne}
                    onClick={!isInCart ? addOne : undefined}>
              <i className="bi bi-plus-circle-fill"></i>
            </button>
          </div>
          <button type="submit" 
                  value="mainSubmitter"
                  className={`btn ${isInCart ? "btn-danger" : "btn-success"} btn-lg w-100 mt-3`}>
                  {isInCart ? "Eliminar todas" : "Agregar al Carrito"}{" "}
                  <i className={isInCart ? "bi bi-trash-fill" : "bi bi-cart-fill"}></i>
          </button>
        </form>
      </div>
    </>
  )
}
