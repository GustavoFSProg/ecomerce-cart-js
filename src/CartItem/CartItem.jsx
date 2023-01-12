import Button from '@material-ui/core/Button';
// Types
// Styles
import { Wrapper } from './CartItem.styles';


const CartItem = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
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
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
