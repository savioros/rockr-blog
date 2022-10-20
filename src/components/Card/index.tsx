import { useEffect, useRef, useState } from 'react'
import useArticles from '../../context/ArticlesProvider/useArticles'
import * as S from './styles'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Card() {
    const { articles, getArticle } = useArticles()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const infinitScrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        getArticle(page)
    }, [page])

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setPage((prevState) => prevState + 1)
            }
        })

        if(infinitScrollRef.current) intersectionObserver.observe(infinitScrollRef.current)

        return () => intersectionObserver.disconnect()
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
                        <p>{article.split('<p>').join('').split('</p>').join('')}</p>
                    </div>
                    <button onClick={() => selectArticle(id)}>
                        <MdOutlineDoubleArrow/>
                    </button>
                </S.CardWrapper>
            })}
            <div ref={infinitScrollRef}/>
        </S.Container>
    )
}

export default Card