import { ReactNode } from 'react'
import { IconType } from 'react-icons'
import * as S from './styles'

interface ButtonFormProps{
    name: string
    icon: ReactNode
}

function ButtonForm({ name, icon }: ButtonFormProps) {
  return (
    <S.ButtonStyle>
        {icon}
        {name}
    </S.ButtonStyle>
  )
}

export default ButtonForm