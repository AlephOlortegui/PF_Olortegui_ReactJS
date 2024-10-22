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

  /* isInCart? */
  useEffect(() => {
    const foundIt = items.find(i=> i.id === docID)
    if(foundIt){
      setIsInCart(true);
      setQuantity(Number(foundIt.quantity));
    }
    else{
      setIsInCart(false)
      setQuantity(1);
    }
    //console.log(typeof quantity)
  }, [items])
  

  const handleSubmit = (e) => { 
    e.preventDefault();
    const action = e.nativeEvent.submitter.value; 
    const { cloudSrc, title, price } = docData; 

    if (isInCart) {
      switch (action) {
        case "addOne":
          addOne(); 
          console.log("quantity addOne: ", quantity)
          //dispatch({type: "UPDATE_QUANTITY", payload: })
          break;
  
        case "removeOne":
          removeOne();
          console.log("quantity removeOne: ", quantity)
          break;
  
        case "mainSubmitter":
          dispatch({ type: "DELETE_ITEM", payload: docID }); 
          //setAlert("El producto ha sido eliminado!", "primary");
          break;
  
        default:
          console.error(`Acción desconocida: ${action}`);
          break;
      }
    } else {
      const itemToAdd = { id: docID, cloudSrc, title, price, quantity };
      console.log(typeof itemToAdd.quantity)
      dispatch({ type: "ADD_ITEM", payload: itemToAdd }); // Agregar al carrito
      //setAlert("El producto ha sido agregado exitosamente", "success");
    }
  }

  const removeOne = () => { 
    console.log("remove")
    setQuantity(p => (p <= 1 ? 1: p - 1))
  }
  const addOne = () => { 
    console.log("addddd: stock ", docData.stock)
    setQuantity(p => p + 1)
  }
  
  let truncatedTitle = docData.title.length > 80
      ? docData.title.slice(0,80) + " . . ."
      : docData.title

  return (
    <>
      {/* alert */}

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
                    onClick={!isInCart ? removeOne : undefined}>
              <i className="bi bi-dash-circle-fill"></i>
            </button>
              <p className="mb-0 quantity w-50 text-center">{quantity}</p>
            <button className="btn" 
                    type={isInCart ? "submit" : "button"}
                    value="addOne"
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
