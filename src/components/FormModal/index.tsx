import ButtonForm from '../Buttons/ButtonForm'
import Input from '../Inputs/Input'
import TextArea from '../Inputs/TextArea'
import * as S from './styles'
import { AiOutlineSend } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import useArticles from '../../context/ArticlesProvider/useArticles'
import { Form } from '../Form/styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IFormInputs } from '../../types/types'

const schema = yup.object({
    name: yup.string().required('Enter a valid name'),
    email: yup.string().email().required('Enter a valid email'),
    phone: yup.string().required('Enter a valid phone'),
    message: yup.string().required('Write a comment'),
}).required();

function FormModal() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const { closeModal, sendEmail } = useArticles()

    const onSubmit = (data: IFormInputs) => {
        sendEmail(data)
        reset()
    };

    function overlayCloseModal(target: EventTarget, currentTarget: EventTarget){
        if(target === currentTarget) closeModal()
    }

    return (
        <S.Overlay onClick={({ target, currentTarget }) => overlayCloseModal(target, currentTarget)}>
            <S.Container>
                <S.HeaderModal>
                    <h2>Contact</h2>
                    <button onClick={closeModal}>
                        <IoCloseOutline/>
                    </button>
                </S.HeaderModal>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        labelName='Name' 
                        name="name"
                        placeholder="Fill your full name" 
                        type="text"
                        register={register}
                        error={errors.name?.message}
                    />

                    <Input 
                        labelName='Email' 
                        name='email'
                        placeholder="Fill a valid e-mail" 
                        type="email"
                        register={register}
                        error={errors.email?.message}
                    />

                    <Input 
                        labelName='Phone' 
                        name='phone'
                        placeholder="Fill your phone" 
                        type="text"
                        register={register}
                        error={errors.phone?.message}
                    />

                    <TextArea 
                        register={register} 
                        error={errors.message?.message}
                        labelName='Post' 
                        name='message' 
                        placeholder='Hello...' 
                        rows={7}
                    />
                    <ButtonForm name="Submit" icon={<AiOutlineSend/>} />
                </Form>
            </S.Container>
        </S.Overlay>
  )
}

export default FormModal