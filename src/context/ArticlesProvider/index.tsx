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
    loading: boolean
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
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState<IArticle[]>([])
    const [selectedArticle, setSelectedArticle] = useState<IArticle | undefined>()

    async function getArticle() {
        setLoading(true)
        const response = await Api.get('articles')
        setArticles(response.data)
        setLoading(false)
    }

    async function postArticle() {
    }

    async function viewArticle(id: string | undefined) {
        setLoading(true)
        const response = await Api.get(`articles/${id}`)
        setSelectedArticle(response.data)
        setLoading(false)
    }

    return(
        <ArticlesContext.Provider value={{ loading, articles, selectedArticle, getArticle, postArticle, viewArticle }}>
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