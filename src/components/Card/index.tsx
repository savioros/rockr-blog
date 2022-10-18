import { useEffect } from 'react'
import useArticles from '../../context/ArticlesProvider/useArticles'
import * as S from './styles'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Card() {
    const { articles, getArticle } = useArticles()
    const navigate = useNavigate()

    useEffect(() => {
        getArticle()
    }, [])

    function selectArticle(id: string){
        navigate(`article/${id}`)
    }

    return (
        <S.Container>
            {articles.map(({ id, author, title, article, imageUrl }) => {
                return <S.CardWrapper key={id}>
                    <img src={imageUrl} alt="" />
                    <div>
                        <p>{author}</p>
                        <h2>{title}</h2>
                        <p>{article.split('<p>').join('').split('</p>')}</p>
                    </div>
                    <button onClick={() => selectArticle(id)}>
                        <MdOutlineDoubleArrow/>
                    </button>
                </S.CardWrapper>
            })}
        </S.Container>
    )
}

export default Card