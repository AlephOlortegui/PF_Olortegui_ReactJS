import { createContext, useEffect, useReducer } from "react"

export const CarritoContext = createContext()

const CarritoReducer = (state, action) => { 
  switch (action.type) {
    /* case value:
      
      break;

    case value:
      
      break;    
  
    case value:
      
      break;   */
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