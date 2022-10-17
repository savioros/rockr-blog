import { useState } from 'react'
import Button from '../Button'
import { Container, HeaderStyle } from './styles'
import { HiOutlineMenu, HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [menuMobile, setMenuMobile] = useState(false)
  const navigate = useNavigate()

  function activeMenu(){
    setMenuMobile(!menuMobile)
  }

  function newPost(){
    navigate('/newpost')
  }

  return (
    <Container>
      <HeaderStyle>
        <h1>Rockr Blog</h1>
        <nav>
          <button onClick={activeMenu}>
            {menuMobile ? <HiOutlineMenuAlt3 fontSize={24}/> : <HiOutlineMenu fontSize={24}/>}
          </button>
          <ul className={menuMobile ? 'open' : ''}>
              <li>
                <Link to="/">
                  Posts
                </Link>  
              </li>
              <li>
                <button>Contact</button>
              </li>
              <Button name='New Post' /> 
          </ul>
        </nav>
      </HeaderStyle>
    </Container>
  )
}

export default Header