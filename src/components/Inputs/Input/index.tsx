import { IInputProps } from '../../../types/types'
import * as S from './styles'

function Input({ labelName, name, placeholder, type, register, error }: IInputProps) {
  return (
    <S.Container>
        <S.Label htmlFor={labelName}>{labelName}</S.Label>
        <S.InputStyle {...register(name, {required: true})} id={labelName} type={type} placeholder={placeholder}/>
        <span>{error}</span>
    </S.Container>
  )
}

export default Input