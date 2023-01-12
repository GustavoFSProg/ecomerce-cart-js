import { useState } from 'react'
import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0)
  // items.reduce((item) => item.amount * item.price, 0)
  // items.reduce((item) => item.amount * item.price, 0)

  const [counter, setCounter] = useState(0)

  function Counter() {
    setCounter(counter + 1)
  }

  return (
    <Wrapper>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? <p>Sem items no carrinho.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <button onClick={() => Counter()}>Contador</button>
      {counter}

      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
