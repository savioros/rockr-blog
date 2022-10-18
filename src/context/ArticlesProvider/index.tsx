import { createContext, ReactNode, useState } from "react";
import { Api } from "../../services/api";
/* import { IContext, IArticlesProvider, IArticles } from "./types"; */

interface IArticle {
    id: string
    author: string
    authorEmail: string
    title: string
    article: string
    date: string
    imageUrl: string
}

interface IContext {
    articles: IArticle[]
    selectedArticle: IArticle | undefined
    getArticle: () => Promise<void>
    postArticle: () => Promise<void>
    viewArticle: (id: string | undefined) => Promise<void>
}

interface IArtcilesProvider {
    children: ReactNode
}

export const ArticlesContext = createContext({} as IContext)

export function ArticlesProvider({ children }: IArtcilesProvider){
    const [articles, setArticles] = useState<IArticle[]>([])
    const [selectedArticle, setSelectedArticle] = useState<IArticle | undefined>()

    async function getArticle() {
        const response = await Api.get('articles')
        setArticles(response.data)
    }

    async function postArticle() {
    }

    async function viewArticle(id: string | undefined) {
        const response = await Api.get(`articles/${id}`)
        setSelectedArticle(response.data)
    }

    return(
        <ArticlesContext.Provider value={{ articles, selectedArticle, getArticle, postArticle, viewArticle }}>
            {children}
        </ArticlesContext.Provider>
    )
}

/* export const ArticlesContext = createContext<IContext>({} as IContext)

export function ArticlesProvider({ children }: IArticlesProvider){
    const [articles, setArticles] = useState<IArticles | null>()

    async function getArticle() {
        const response = await Api.get('articles')
        setArticles(response.data)
    }

    async function postArticle() {

    }

    return(
        <ArticlesContext.Provider value={{ articles, getArticle, postArticle }}>
            {children}
        </ArticlesContext.Provider>
    )
} */