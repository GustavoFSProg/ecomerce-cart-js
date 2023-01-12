import { Container, ImgLogo, LinksContainer, LinksContainerMobile, Button, Input, FormDois, Form } from './style'
import logo from '../../assets/logo.png'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleLogout() {
    localStorage.clear()

    return alert("Logout Efetuado com Sucesso!!")
  }

  function handleLike() {
    setIsButtonClicked('flex')
  }

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImgLogo src={logo} alt="logo" />
        <Form>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Input type="search" name="search" placeholder="Search..." />

            <BsSearch size="26" color="gray" style={{ marginLeft: '8px' }} />
          </div>
        </Form>
      </div>
      <div
        style={{
          display: 'flex',
          width: '25%',
        }}
      ></div>

      <Button
        onMouseLeave={() => handleDismissButtonClicked()}
        type="button"
        onClick={() => handleLike()}
      >
        <MenuIcon size="35" />
      </Button>

      <LinksContainer>
        <div style={{ marginLeft: '40px' }}>
          <Link
            style={{
              textDecoration: 'none',
              fontFamily: 'Roboto',
              color: 'black'
            }} to="/">
          HOME
          </Link>
        </div>

        <div style={{ marginLeft: '35px' }}>
          <Link
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
            to="/profile"
          >
            PROFILE
          </Link>
        </div>

        <div style={{ marginLeft: '35px' }}>
          {/* <Link
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
            to="/login"
          > */}
          LOGIN
          {/* </Link> */}
        </div>

        <div style={{ marginLeft: '35px' }}>
          {/* <Link
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
            onClick={handleLogout}
          > */}
          LOGOUT
          {/* </Link> */}
        </div>
      </LinksContainer>
      {/* <div style={{ display: 'flex', flexDirection: 'center' }}> */}

      <FormDois
        style={{
          display: `${isButtonClicked}`,
          marginTop: '230px',
          marginLeft: '-240px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '17rem',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '8px'
          }}
        >
          <Input
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            // style={{ width: '14rem' }}
            type="search"
            name="search"
            placeholder="Search..."
          />

          <BsSearch
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            size="26"
            color="white"
            style={{ marginLeft: '8px', marginTop: '11px' }}
          />


        </div>
        <LinksContainerMobile>
          <div style={{ marginLeft: '20px', marginTop: '8px' }}>
            {/* <Link style={{
              textDecoration: 'none', fontSize: '21px', fontFamily: 'Roboto', color: 'white',
              cursor: 'pointer'
            }} to="/"> */}
            HOME
            {/* </Link> */}
          </div>

          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px', }}>
            {/* <Link

              style={{ cursor: 'pointer', fontSize: '21px', textDecoration: 'none', fontFamily: 'Roboto', color: 'white  ' }}
              to="/login"
            > */}
            LOGIN
            {/* </Link> */}
          </div>
          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px', }}>
            {/* <Link

              style={{ cursor: 'pointer', fontSize: '21px', textDecoration: 'none', fontFamily: 'Roboto', color: 'white  ' }}
              onClick={handleLogout}

            > */}
            LOGOUT
            {/* </Link> */}
          </div>

          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px', }}>
            {/* <Link

              style={{ cursor: 'pointer', fontSize: '21px', textDecoration: 'none', fontFamily: 'Roboto', color: 'white  ' }}
              to="/register"
            > */}
            CADASTRO
            {/* </Link> */}
          </div>
        </LinksContainerMobile>

      </FormDois>



      {/* </div> */}



    </Container >
  )
}

export default Header
