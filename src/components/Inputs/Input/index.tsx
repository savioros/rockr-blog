import * as S from './styles'

interface InputProps{
  labelName: string 
  placeholder: string
  type: string
}

function Input({ labelName, placeholder, type }: InputProps) {
  return (
    <S.Container>
        <S.Label htmlFor={labelName}>{labelName}</S.Label>
        <S.InputStyle id={labelName} type={type} placeholder={placeholder}/>
    </S.Container>
  )
}

export default Input