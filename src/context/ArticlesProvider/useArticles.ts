import { useContext } from "react";
import { ArticlesContext } from ".";

export function useArticles(){
    const context = useContext(ArticlesContext)
    
    return context
}