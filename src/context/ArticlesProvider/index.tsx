import { createContext, useState } from "react";
import { Api } from "../../services/api";
import { IArticle, IContext, IArtcilesProvider } from "./types";
import emailjs from '@emailjs/browser'
import { IFormInputs } from "../../types/types";

export const ArticlesContext = createContext({} as IContext)

export function ArticlesProvider({ children }: IArtcilesProvider){
    const [modal, setModal] = useState(false)
    const [articles, setArticles] = useState<IArticle[]>([])
    const [selectedArticle, setSelectedArticle] = useState<IArticle | undefined>()

    async function getArticle(page: number) {
        try {
            const response = await Api.get(`articles?_page=${page}`)
    
            let payload = [...articles, ...response.data]
            
            setArticles(payload)
        } catch (error) {
            console.error('Error GetArticle', error)
        }
    }

    function postArticle(data: object) {
        try {
            Api.post('articles', data)
        } catch (error) {
            console.error('Error PostArticle', error)
        }
    }

    async function viewArticle(id: string | undefined) {
        try {
            const response = await Api.get(`articles/${id}`)
            setSelectedArticle(response.data)
        } catch (error) {
            console.error('Error ViewArticle', error)
        }
    }

    function sendEmail(data: IFormInputs){
        try {

            const templateParams = {
                from_name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message
            }
            emailjs.send("service_v04qor2", "template_przpmv7", templateParams, "qQ_jHe1ojOegnvY04")

        } catch (error) {
            console.error('Error SendMail', error)
        }
    }

    function openModal(){
        setModal(true)
    }

    function closeModal(){
        setModal(false)
    }

    return(
        <ArticlesContext.Provider value={{ modal, openModal, closeModal, articles, selectedArticle, getArticle, postArticle, viewArticle, sendEmail}}>
            {children}
        </ArticlesContext.Provider>
    )
}