import { useState } from 'react'
import ButtonNewPost from '../Buttons/ButtonNewPost'
import * as S from './styles'
import { HiOutlineMenu, HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import useArticles from '../../context/ArticlesProvider/useArticles'

function Header() {
  const [menuMobile, setMenuMobile] = useState(false)
  const { openModal } = useArticles()

  function activeMenu(){
    setMenuMobile(!menuMobile)
  }

  return (
    <S.HeaderContainer>
      <S.HeaderStyle>
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
                <button onClick={openModal}>Contact</button>
              </li>
              <ButtonNewPost name='New Post' /> 
          </ul>
        </nav>
      </S.HeaderStyle>
    </S.HeaderContainer>
  )
}

export default Header