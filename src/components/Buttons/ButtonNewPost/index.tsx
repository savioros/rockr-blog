import * as S from './styles'
import { useNavigate } from 'react-router-dom'

interface ButtonNewPostProps{
  name: string
}

function ButtonNewPost({ name }: ButtonNewPostProps) {
  const navigate = useNavigate()

  function newPost(){
    navigate('/newpost')
  }

  return (
    <S.ButtonContainer onClick={newPost}>
      {name}
    </S.ButtonContainer>
  )
}

export default ButtonNewPost