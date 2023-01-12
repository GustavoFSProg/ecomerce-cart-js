import { useEffect, useState } from 'react'
import api from './api'
import Header from './components/Header/Header'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const Button = styled.button`   
 display: flex;
 align-items: center ;
 justify-content: center ;
 width: 22rem;
 height: 35px;
 background: #004d4d;
 border-radius: 3px;
 padding-top: 20px;
 padding-bottom: 20px;
 margin-top: 30px;
 color: white;
 font-size: 14px;
 letter-spacing: 1px ;

`


const preco = 100

function Profile() {
  const [product, setProducts] = useState({})
  const [change, setChange] = useState('')

  const navigate = useNavigate()


  const ID = localStorage.getItem('Id')
  async function handleProfile() {
    const { data } = await api.get(`/profile/${ID}`)



    setProducts(data)

    console.log(product)
  }

  function handleInput() {
    console.log(change)
    // alert(change * preco)

    // const priceItem = change * preco

    navigate('/cart')


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
    handleProfile()
  }, [])


  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-30px'
        }}
      >

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'left',

          }}
        >
          <h2>{product.title}</h2>

          <img src={product.image} alt="imagem" width="450" />
          <h2>{product.desc}</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',


            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'left',
              }}
            >
              <h2>R$ {product.price}</h2>
              <h4>Quantidade</h4>

              <input type="number" onChange={(e) => setChange(e.target.value)} placeholder="1" height="150"
                style={{
                  width: "70px", fontSize: "18px",
                  paddingLeft: '18px',
                  paddingRight: '10px',
                  paddingTop: '10px'
                  ,
                  paddingBottom: '10px'
                }} />
            </div>
            <Button onClick={handleAddToCart}>Adicionar ao Carrinho</Button>

          </div>
        </div>

      </div>
    </>
  )
}

export default Profile
