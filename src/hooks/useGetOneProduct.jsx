import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/firebaseConfig"

export const useGetOneProduct = (idParam) => {
  const [dbProduct, setDbProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setError] = useState(null)

  useEffect(() => {
    const getOneProduct = async () => { 
      setIsLoading(true)
      try {
        const docRef = doc(db, "products", idParam);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists){
          setDbProduct(docSnap.data()); //is async
        }
        else{
          //console.error("Error: Document not Found")
          throw new Error("Error: Document not Found")
        }
      } catch (err) {
        setError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
  
    getOneProduct();
  }, [idParam])

  // Log the state after it updates
 /*  useEffect(() => {
    console.log("Updated dbProduct:", dbProduct);
  }, [dbProduct]); // This will log whenever docData changes */
  
  return {
    dbProduct, isLoading, err
  }
}
