import { useEffect, useState } from 'react'
import styled from 'styled-components'
import api from './api'

export const Button = styled.button`   
 display: flex;
 align-items: center ;
 justify-content: center ;
 width: 12rem;
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

function CART() {
  const [product, setProducts] = useState({})
  const [change, setChange] = useState('')
  const [calc, setCalc] = useState(0)



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

  function Calculate(price, changed) {

    setCalc(price * changed)
  }


  useEffect(() => {
    handleProfile()
  }, [])


  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '57vw',
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
            flexDirection: 'colunm',
            alignItems: 'flex-start',
            justifyContent: 'left',



          }}
        >


          <img src={product.image} alt="imagem" width="170" />
          <br />
          <span
            style={{
              fontSize: '22px',
              fontWeight: 'bold',
              marginTop: '2px',
              marginLeft: "15px"
            }}>{product.title}</span>
          <br />

          <span style={{
            fontWeight: 'bold', fontSize: '22px',
            marginTop: '35px', marginLeft: "-115px"
          }}>{product.desc}</span>
          <br />

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
              {/* <span style={{
                fontWeight: 'bold',
                fontSize: '22px', marginTop: '7px'
              }}>R$ {product.price}</span> */}

              <span style={{
                fontWeight: 'bold', fontSize: '22px',
                marginTop: '70px', marginLeft: "-32px"
              }}>R$ {product.price}</span>

              <h4 style={{ marginTop: '80px' }}>Quantidade</h4>

              <input type="number" onChange={(e) => setChange(e.target.value)}
                onMouseLeave={() => Calculate(product.price, change)}
                placeholder="1" height="150"
                style={{
                  width: "70px", fontSize: "18px",
                  paddingLeft: '18px',
                  paddingRight: '10px',
                  paddingTop: '10px',

                  paddingBottom: '10px'
                }} />
            </div>
            <Button onClick={() => Calculate(product.price, change)}>Calcular</Button>
            <br />
            <h2>
              Total do Item  R$ {calc}

            </h2>
          </div>
        </div>

      </div>
    </>
  )
}

export default CART