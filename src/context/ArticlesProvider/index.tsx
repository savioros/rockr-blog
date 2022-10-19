import { createContext, useState } from "react";
import { Api } from "../../services/api";
import { IArticle, IContext, IArtcilesProvider } from "./types";

export const ArticlesContext = createContext({} as IContext)

export function ArticlesProvider({ children }: IArtcilesProvider){
    const [openModal, setOpenModal] = useState(false)
    const [articles, setArticles] = useState<IArticle[]>([])
    const [selectedArticle, setSelectedArticle] = useState<IArticle | undefined>()

    async function getArticle(page: number) {
        const response = await Api.get(`articles?_page=${page}`)

        let payload = [...articles, ...response.data]
        
        setArticles(payload)
    }

    async function postArticle() {
    }

    async function viewArticle(id: string | undefined) {
        const response = await Api.get(`articles/${id}`)
        setSelectedArticle(response.data)
    }

    function addModal(){
        setOpenModal(true)
    }

    function closeModal(){
        setOpenModal(false)
    }

    return(
        <ArticlesContext.Provider value={{ openModal, addModal, closeModal, articles, selectedArticle, getArticle, postArticle, viewArticle }}>
            {children}
        </ArticlesContext.Provider>
    )
}