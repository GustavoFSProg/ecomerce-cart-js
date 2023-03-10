import { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Header from './components/Header/Header'

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
import { Wrapper, StyledButton, Container, Imagem, Card } from './App.styles'
import api from './api'
import { useNavigate } from 'react-router-dom'
import CART from './CART'
import { useContext } from 'react'
import { CartContext } from './cartContext'



const getProducts = async () => {
  return await api.get('/get-products')
}

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [produtos, setProdutos] = useState([])
  const [cartItems, setCartItems] = useState([])
  const { isLoading, error } = useQuery('products', getProducts)

  const { productID, setProductID } = useContext(CartContext)

  const navigate = useNavigate()

  function handleCard(id) {
    // navigate('/cart')
    localStorage.setItem('Id', id)

    setProductID(id)

  }


  function handleProfile(id) {
    navigate('/profile')
    localStorage.setItem('Id', id)
  }

  async function handleProducts() {
    const { data } = await api.get('/get-products')
    setProdutos(data)
    console.log(data)
  }

  const getTotalItems = (items) => items.reduce((ack, item) => ack + item.amount, 0)

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        )
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
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
    <>
      <Header />
      {/* {productID.map(item => {
        return (
          <>
            <p>
              {item[0]}
            </p>
          </>
        )
      })} */}
      {/* {productID} */}

      <Wrapper>
        <Imagem src="https://picsum.photos/id/1/935/350" alt="imagem" />
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <CART />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon fontSize="large" />
          </Badge>
        </StyledButton>
        <Container>
          {produtos?.map((item) => (
            <Card item key={item.id}>
              <div onClick={() => handleProfile(item.id)}>
                <Imagem src={item.image} alt={item.title} style={{ width: '240px' }} />
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
              </div>
              <Button
                style={{ marginLeft: '18px', background: '#f2f2f2' }}
                onClick={() => handleCard(item.id)}
              >
                Adicionar ao Carrinho
              </Button>
            </Card>
          ))}
        </Container>
      </Wrapper>
    </>
  )
}

export default App
