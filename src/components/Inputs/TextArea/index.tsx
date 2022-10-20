import { IInputProps } from '../../../types/types'
import * as S from './styles'

function TextArea({ labelName, name, placeholder, rows, register, error }: IInputProps) {
  return (
    <S.Container>
        <S.Label htmlFor={labelName}>{labelName}</S.Label>
        <S.TextAreaStyle {...register(name)} placeholder={placeholder} rows={rows}/>
        <span>{error}</span>
    </S.Container>
  )
}

export default TextArea