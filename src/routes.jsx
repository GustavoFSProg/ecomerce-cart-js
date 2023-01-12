import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CART from './CART'
import Profile from './Profile'


function Routeres() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<CART />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routeres