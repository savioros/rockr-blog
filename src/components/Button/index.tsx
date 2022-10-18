import * as S from './styles'

interface ButtonProps{
  name: string
}

function Button({ name }: ButtonProps) {
  return (
    <S.ButtonContainer>
      {name}
    </S.ButtonContainer>
  )
}

export default Button