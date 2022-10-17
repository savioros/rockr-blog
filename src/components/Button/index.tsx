import { ButtonContainer } from './styles'

interface ButtonProps{
  name: string
}

function Button({ name }: ButtonProps) {
  return (
    <ButtonContainer>
      {name}
    </ButtonContainer>
  )
}

export default Button