import { ReactNode } from "react";

export interface IArticles {
    articles?: any[] | null
}

export interface IContext extends IArticles {
    getArticle: () => Promise<void>
    postArticle: () => Promise<void>
}

export interface IArticlesProvider {
    children: ReactNode
}