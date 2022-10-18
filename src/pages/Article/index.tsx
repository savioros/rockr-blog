import { useParams } from 'react-router-dom'
import * as S from './styles'
import useArticles from '../../context/ArticlesProvider/useArticles'
import { useEffect } from 'react'

function Article() {
    const { selectedArticle, viewArticle } = useArticles()
    const { id } = useParams()

    useEffect(() => {
        viewArticle(id)
    }, [id])

    return (
        <S.Container>
            <S.FirstLine>
                <img src={selectedArticle?.imageUrl} alt="" />
                <div>
                    <span>{selectedArticle?.date}</span>
                    <p>{selectedArticle?.author}</p>
                    <h2>{selectedArticle?.title}</h2>
                </div>
            </S.FirstLine>
            <S.SecondLine>
                <p>{selectedArticle?.article.split('<p>').join('').split('</p>')}</p>
            </S.SecondLine>
        </S.Container>
    )
}

export default Article