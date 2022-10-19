import ButtonForm from '../../components/Buttons/ButtonForm'
import { Form } from '../../components/Form/styles'
import Input from '../../components/Inputs/Input'
import TextArea from '../../components/Inputs/TextArea'
import { BsFillPencilFill } from 'react-icons/bs'
import * as S from './styles'

function NewArticle() {
  return (
    <S.Container>
        <S.ArticleContainer>
            <S.ArticleHeader>
                <div></div>
                <h2>New Post</h2>
            </S.ArticleHeader>
            <Form>
                <Input 
                    labelName='Title' 
                    placeholder="Fill the title" 
                    type="text"
                />
                <Input 
                    labelName='Author' 
                    placeholder="Fill the author name" 
                    type="email"
                />
                <Input 
                    labelName='Image URL' 
                    placeholder="Fill the image URL" 
                    type="text"
                />
                <TextArea labelName='Post' placeholder='Post...' rows={7}/>
                <ButtonForm name="Create Post" icon={<BsFillPencilFill/>} />
            </Form>
        </S.ArticleContainer>
    </S.Container>
  )
}

export default NewArticle