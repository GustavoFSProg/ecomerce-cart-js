import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CART from './CART'
import CartContextProvider from './cartContext'
import Profile from './Profile'


function Routeres() {
  return (
    <CartContextProvider >
    <BrowserRouter>
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<CART />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default Routeres