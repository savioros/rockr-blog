import { ReactNode } from "react";
import { IFormInputs } from "../../types/types";

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
    modal: boolean
    openModal: () => void
    closeModal: () => void
    articles: IArticle[]
    selectedArticle: IArticle | undefined
    getArticle: (page: number) => Promise<void>
    postArticle: (data: object) => Promise<void>
    viewArticle: (id: string | undefined) => Promise<void>
    sendEmail: (data: IFormInputs) => void
}

export interface IArtcilesProvider {
    children: ReactNode
}
export interface ISendEmail {
    name: string
    email: string
    phone: string
    message: string
}