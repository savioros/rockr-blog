import { useContext } from "react";
import { ArticlesContext } from ".";

export default function useArticles(){
    const context = useContext(ArticlesContext)
    
    return context
}