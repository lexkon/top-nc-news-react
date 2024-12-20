import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { CommentsView } from './CommentsView'
import { Votes } from './Votes'
import { SkeletonCard } from './SkeletonCard'
import { getArticleById } from '../../api'
import { toCapitalise, toTitleCase } from '../utils'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/ArticleView.css'

export const ArticleView = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    const getArticle = async () => {
        try {
            setIsLoading(true)
            const article = await getArticleById(article_id)
            setArticle(article)
        } catch (error) {
            navigate('not-found')
            return error
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getArticle()
    }, [])

    return (
        <div className='article-view'>
            {isLoading
                ? <SkeletonCard />
                : (
                    <>
                        <h1>{toTitleCase(article.title)}</h1>
                        <h3>by {article.author} ⋅ {toCapitalise(article.topic)}</h3>
                        <img src={article.article_img_url} />
                        <Votes votes={article.votes} article_id={article_id} />
                        <p>{article.body}</p>
                    </>
                )}
            <CommentsView article_id={article_id} />
        </div>
    )
}