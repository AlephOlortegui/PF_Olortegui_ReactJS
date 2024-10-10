import { useEffect, useState } from "react"
import inventario from "../../data/productos"
import { useGetTiendaCategorias } from "./useGetTiendaCategorias";

//Fisher-Yates (or Knuth) shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at index i and j
  }
  return array;
}

export const useFilterTienda = (endPoint) => {
  const [suffledInventario, setSuffledInventario] = useState([])
  const [productos, setProductos] = useState([])
  const {categoriaLinks} = useGetTiendaCategorias()

  useEffect(() => {
    const shuffled = shuffleArray([...inventario]); 
    setSuffledInventario(shuffled); 
  }, []); 

  useEffect(() => {
    if (suffledInventario.length > 0) {

      if(categoriaLinks.indexOf(endPoint) !== -1){ 
        const filteredProducts = suffledInventario.filter(i => i.categoria === endPoint);
        setProductos(filteredProducts);
      }
      else{
        setProductos(suffledInventario);
      }
    }
  }, [endPoint, suffledInventario])
  
  return {productos}
}
