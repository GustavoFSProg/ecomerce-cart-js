import { useState } from 'react'
import { Children, createContext } from 'react'

export const CartContext = createContext({})


function CartContextProvider({ children }) {
  const [productID, setProductID] = useState([])

  return (
    <CartContext.Provider value={{ productID, setProductID }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider 