import * as S from './styles'

interface TextAreaProps{
    labelName: string 
    placeholder: string
    rows: number
}

function TextArea({ labelName, placeholder, rows }: TextAreaProps) {
  return (
    <S.Container>
        <S.Label htmlFor={labelName}>{labelName}</S.Label>
        <S.TextAreaStyle placeholder={placeholder} rows={rows}/>
    </S.Container>
  )
}

export default TextArea