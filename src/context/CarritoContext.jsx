import { createContext, useEffect, useReducer } from "react"

export const CarritoContext = createContext()

const CarritoReducer = (state, action) => { 
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "UPDATE_QUANTITY":
      //{id, cloudSrc, title, price, quantity}
      //Para actualizar Quantities
      const foundItem = state.find(i => i.id === action.payload.id);
      /* const maxQuantity = Math.min(
        Number(action.payload.quantity), 
        Number(action.payload.stock) //nunca se pasa es x eso el error
      ); */

      if (foundItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      return state
      //return [...state, { ...action.payload, quantity: maxQuantity }];

    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload)   
  
    default:
      return state
  }
 }

export const CarritoProvider = ({children}) => {
  const [items, dispatch] = useReducer(CarritoReducer, [], () => {
    let LS_items = localStorage.getItem('items');
    return LS_items ? JSON.parse(LS_items) : []
  })

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))  
  }, [items])


  return (
    <CarritoContext.Provider value={{
      items,
      dispatch
    }}>
      {children}
    </CarritoContext.Provider>
  )
}