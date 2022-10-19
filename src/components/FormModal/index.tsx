import ButtonForm from '../Buttons/ButtonForm'
import Input from '../Inputs/Input'
import TextArea from '../Inputs/TextArea'
import * as S from './styles'
import { AiOutlineSend } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import useArticles from '../../context/ArticlesProvider/useArticles'
import { Form } from '../Form/styles'

function FormModal() {
    const { closeModal } = useArticles()

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
                <Form>
                    <Input 
                        labelName='Name' 
                        placeholder="Fill your full name" 
                        type="text"
                    />
                    <Input 
                        labelName='Email' 
                        placeholder="Fill a valid e-mail" 
                        type="email"
                    />
                    <Input 
                        labelName='Phone' 
                        placeholder="Fill your phone" 
                        type="text"
                    />
                    <TextArea labelName='Post' placeholder='Hello...' rows={7}/>
                    <ButtonForm name="Submit" icon={<AiOutlineSend/>} />
                </Form>
            </S.Container>
        </S.Overlay>
  )
}

export default FormModal