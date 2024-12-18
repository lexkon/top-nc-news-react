import { useNavigate, useParams } from 'react-router'
import { useState, useEffect, useOptimistic } from 'react'
import { CommentsView } from './CommentsView'
import { SkeletonCard } from './SkeletonCard'
import { getArticleById, patchArticleVotes } from '../../api'
import { toTitleCase } from '../utils'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/ArticleView.css'

export const ArticleView = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [] = useOptimistic()
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

    useEffect(() => getArticle(), [article_id])

    return (
        <div className='article-view'>
            {isLoading
                ? <SkeletonCard />
                : (
                    <>
                        <h1>{toTitleCase(article.title)}</h1>
                        <h3>by {article.author} ⋅ {article.topic}</h3>
                        <img src={article.article_img_url} />
                        <div className='votes-container'>
                            <button id='upvote'>+</button>
                            <p>{article.votes} upvotes</p>
                            <button id='downvote'>-</button>
                        </div>
                        <p>{article.body}</p>
                    </>
                )}
            <CommentsView article_id={article_id} />
        </div>

    )
}