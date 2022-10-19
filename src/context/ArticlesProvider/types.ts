import { ReactNode } from "react";

export interface IArticle {
    id: string
    author: string
    authorEmail: string
    title: string
    article: string
    date: string
    imageUrl: string
}

export interface IContext {
    loading: boolean
    openModal: boolean
    addModal: () => void
    closeModal: () => void
    articles: IArticle[]
    selectedArticle: IArticle | undefined
    getArticle: (page: number) => Promise<void>
    postArticle: () => Promise<void>
    viewArticle: (id: string | undefined) => Promise<void>
}

export interface IArtcilesProvider {
    children: ReactNode
}