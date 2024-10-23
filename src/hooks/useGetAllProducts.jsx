import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { productsCollectionRef } from "../firebase/firebaseConfig"

export const useGetAllProducts = () => {
  const [dbProducts, setDbProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setError] = useState(null)

  useEffect(() => {
    const getAllProducts = async () => { 
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(productsCollectionRef)
        const DBdata = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        //console.log(DBdata)
        setDbProducts(DBdata)
      } catch (err) {
        console.log("useGetAllProducts err: ",err.message)
        setError(err.message)
      }
      finally{
        setIsLoading(false)
      }
     }
    getAllProducts()
  }, [])

  return {
    dbProducts, isLoading, err
  }
}
