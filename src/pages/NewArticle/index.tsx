import ButtonForm from '../../components/Buttons/ButtonForm'
import { Form } from '../../components/Form/styles'
import Input from '../../components/Inputs/Input'
import TextArea from '../../components/Inputs/TextArea'
import { BsFillPencilFill } from 'react-icons/bs'
import * as S from './styles'
import useArticles from '../../context/ArticlesProvider/useArticles'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IFormInputs } from '../../types/types'

const schema = yup.object({
    title: yup.string().required('Enter a valid name'),
    author: yup.string().required('Enter author name'),
    imageUrl: yup.string().required('Enter a valid imageUrl'),
    article: yup.string().required('Write a comment'),
}).required();

function NewArticle() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const { postArticle } = useArticles()

    const onSubmit = (data: IFormInputs) => {
        postArticle(data)
        reset()
    };

    return (
        <S.Container>
            <S.ArticleContainer>
                <S.ArticleHeader>
                    <div></div>
                    <h2>New Post</h2>
                </S.ArticleHeader>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        labelName='Title' 
                        name="title"
                        placeholder="Fill the title" 
                        type="text"
                        register={register}
                        error={errors.title?.message}
                    />
                    
                    <Input 
                        labelName='Author' 
                        name="author"
                        placeholder="Fill the author name" 
                        type="text"
                        register={register}
                        error={errors.author?.message}
                    />

                    <Input 
                        labelName='Image URL' 
                        name="imageUrl"
                        placeholder="Fill the image URL" 
                        type="text"
                        register={register}
                        error={errors.imageUrl?.message}
                    />

                    <TextArea 
                        register={register} 
                        error={errors.article?.message} 
                        labelName='Post' 
                        name="article" 
                        placeholder='Post...' 
                        rows={7}
                    />

                    <ButtonForm name="Create Post" icon={<BsFillPencilFill/>} />
                </Form>
            </S.ArticleContainer>
        </S.Container>
    )
}

export default NewArticle