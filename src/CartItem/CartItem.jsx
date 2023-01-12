import Button from '@material-ui/core/Button';
import { useState } from 'react'
// Types
// Styles
import { Wrapper } from './CartItem.styles';

// function CounterAdditem(addToCart, item) {
//   const counter = counter + 1
// }
const counter = 10


function CartItem({ item, addToCart, removeFromCart }) {

  const [counter, setCounter] = useState(0)

  function Counter() {
    setCounter(counter + 1)

    return counter
  }


  return (

    < Wrapper >
    <div>
      <h3>{item.title}</h3>
      <div className='information'>
        <p>Preço: ${item.price}</p>
        {/* <p>Total: ${(item.amount * item.price).toFixed(2)}</p> */}
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
          style={{ marginRight: '5px' }}
        >
          -
          </Button>
        <Button
          size='small'
          disableElevation
          variant='contained'
            onClick={() => addToCart(item)}
            CounterAdditem
        >

          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
    </Wrapper >

  )


}

export default CartItem;
