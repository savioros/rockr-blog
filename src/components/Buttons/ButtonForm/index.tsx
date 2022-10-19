import * as S from './styles'

interface ButtonFormProps{
    name: string
    icon: string
}

function ButtonForm({ name, icon }: ButtonFormProps) {
  return (
    <S.ButtonStyle>
        <img src={icon} alt="" />
        {name}
    </S.ButtonStyle>
  )
}

export default ButtonForm