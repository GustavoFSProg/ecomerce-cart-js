import { useEffect, useState } from 'react'

import { useQuery } from 'react-query'
// Components
import Item from './Item/Item'
import Cart from './Cart/Cart'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
// Styles
import { Wrapper, StyledButton } from './App.styles'
import api from './api'

const getProducts = async () => { return await api.get('/get-products') }

const App =  () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [produtos, setProdutos] = useState([])
  const [cartItems, setCartItems] = useState([])
  const { isLoading, error } = useQuery(
    'products',
    getProducts
  )

  async function handleProducts() {
    const { data } = await api.get('/get-products')
    setProdutos(data)
    console.log(data)
   }

  const getTotalItems = (items) =>
    items.reduce((ack, item) => ack + item.amount, 0)

  const handleAddToCart = (clickedItem) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack
          return [...ack, { ...item, amount: item.amount - 1 }]
        } else {
          return [...ack, item]
        }
      }, [])
    )
  }

  useEffect(() => {
    handleProducts()
  }, [])

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>


  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon fontSize='large'/>
        </Badge>
      </StyledButton>
      <Grid container spacing={3} style={{marginTop: '50px'}}>
        {produtos?.map(item => (
          <Grid item key={item.id} xs={12} sm={3}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>

        ))}
      </Grid>
    </Wrapper>
  )
}

export default App