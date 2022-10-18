import { useEffect } from 'react'
import { useArticles } from '../../context/ArticlesProvider/useArticles'
import * as S from './styles'
import { MdOutlineDoubleArrow } from 'react-icons/md'

function Card() {
    const { articles, getArticle } = useArticles()

    useEffect(() => {
        getArticle()
    }, [])

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
                    <button>
                        <MdOutlineDoubleArrow/>
                    </button>
                </S.CardWrapper>
            })}
        </S.Container>
    )
}

export default Card