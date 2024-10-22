import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Loader, Mapa } from "../../components";

export const ItemDetailContainer = () => {
  const [docData, setDocData] = useState(null)
  const [isDocLoading, setIsDocLoading] = useState(false)
  const {id} = useParams()
  //console.log(id, typeof id)

  const location = useLocation();
  //console.log(location) // ItemList.jsx Link state

  const search = location.state?.search || "";
  const typeFilter = location.state?.typeFilter || "Store"

  useEffect(() => {
    const fetchDoc = async () => { 
      setIsDocLoading(true)
      try {
        const docRef = doc(db,"products",id);
        const docSnap = await getDoc(docRef)
        if(docSnap.exists){
          setDocData(docSnap.data()); //is async
        }
        else{
          //console.error("Error: Document not Found")
          throw new Error("Error: Document not Found")
        }
      } catch (err) {
        console.log(err.message)
      } finally{
        setIsDocLoading(false)
      }
      
     }
     fetchDoc()
  
  }, [id])

 // Log the state after it updates
  useEffect(() => {
    console.log("Updated docData:", docData);
  }, [docData]); // This will log whenever docData changes

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
          {isDocLoading ? (
                <Loader />
              ) : docData ? (
                <ItemDetail docData={docData} docID={id} />
              ) : (
                <div>Error: Product not found or no data available</div>
          )}
      </div>
      <Mapa />
  </div>
  )
}
