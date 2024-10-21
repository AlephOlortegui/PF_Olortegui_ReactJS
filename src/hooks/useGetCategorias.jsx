import { useEffect, useState } from "react"
import { getDocs } from 'firebase/firestore';
import {productsCollectionRef} from '../firebase/firebaseConfig';

export const useGetCategorias = () => {
  const [categoriaLinks, setLinks] = useState([]);
  const [isGettingCategories, setIsGettingCategories] = useState(false)
  
  useEffect(() => {
    const getData = async () => { 
      setIsGettingCategories(true)
      try {
        const querySnapshot = await getDocs(productsCollectionRef);
        const DBdata = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        //console.log("DBdata ",DBdata)
        const categoriasUnicas = DBdata.reduce((acc, curr) => {
          let x = curr.categoria;
          if(acc.indexOf(x) === -1){
            acc.push(x)
          }
          return acc
        }, []);
        //console.log("categorias: ", categoriasUnicas)
        setLinks(categoriasUnicas)
      } catch (err) {
        console.log(err.message)
      }
      finally{
        setIsGettingCategories(false)
      }
     }
     getData()
  }, [])
  
  
  return {categoriaLinks, isGettingCategories}
}
