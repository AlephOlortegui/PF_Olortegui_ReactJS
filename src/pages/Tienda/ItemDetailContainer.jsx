import { Link, useLocation, useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail";
import { Alert, Loader, Mapa } from "../../components";
import { useGetOneProduct } from "../../hooks";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
  const {id} = useParams()
  const {dbProduct, isLoading, err} = useGetOneProduct(id)
  const [docData, setDocData] = useState(null)

  const location = useLocation();
  //console.log(location) // ItemList.jsx Link state

  const search = location.state?.search || "";
  const typeFilter = location.state?.typeFilter || "Store"

  // Log the state after it updates
  useEffect(() => {
    //console.log("useEffect Updated dbProduct:", dbProduct);
    if(!isLoading){
      setDocData(dbProduct)
    }
  }, [dbProduct]); // This will log whenever docData changes

  return (
    <div className="container-fluid detalles">
      <div className="row mb-3">
          <div className="col-12">
              <div className="links px-5">
                <Link to={`..${search}`} relative="path">&larr; Go back to {typeFilter}</Link>
                <Link to="/carrito"> Go to Cart &rarr;</Link>
              </div>
          </div>
      </div>
      <div className="row mb-4 g-3 item">
          {isLoading ? (
                <Loader />
              ) : (!err && docData) ? (
                <ItemDetail docData={dbProduct} docID={id} />
              ) : (
                <div className="err-box">
                  <Alert
                        dismissible={false}
                        alertMessage={err}
                        alertClass="danger" />
                </div>
          )}
      </div>
      <Mapa />
  </div>
  )
}

