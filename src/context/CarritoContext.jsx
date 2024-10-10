import { createContext, useEffect, useReducer } from "react";

export const CarritoContext = createContext()

const CarritoReducer = (state,action) => { 
  switch (action.type) {
    /* RECORDAR de productos.js cada item contiene las propiedades 
    {id: producto: src: precio: categoria:}*/
    case 'ADD_ITEM':
      // evitar repetidas - solo actualizar quantities || some or find() ?
      let foundInCart = state.some(item => item.id === action.payload.id)
      if(foundInCart){
        let updatedState = state.map(item => {
          if(item.id === action.payload.id){
            return {
              ...item,
              quantity: action.payload.quantity
            }
          }
          return item
        })
        return updatedState
      }
      return [
        ...state,
        action.payload
      ];

    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload)
     
    case 'CLEAR_CART':
      return []  
    default:
      return state
  }
 }

export const CarritoProvider = ({children}) => { 
  const [items, dispatch] = useReducer(CarritoReducer, [], ()=>{
    let LS_carrito = localStorage.getItem('items')
    return LS_carrito ? JSON.parse(LS_carrito) : []
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

 //export const useCarrito = useContext(CarritoContext)