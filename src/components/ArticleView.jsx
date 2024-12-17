import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { fetchArticleById } from '../../api'
import { SkeletonCard } from './SkeletonCard'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/ArticleView.css'

export const ArticleView = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState()
    const [isLoading, setLoading] = useState(true)

    const fetchArticle = async () => {
        try {
            setLoading(true)
            const article = await fetchArticleById(article_id)
            setArticle(article)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchArticle()
    }, [article_id])

    return (
        <div className='article-view'>
            {isLoading
                ? <SkeletonCard />
                : (
                    <>
                        <h1>{article.title}</h1>
                        <h3>by {article.author} ⋅ {article.topic}</h3>
                        <img src={article.article_img_url} />
                        <p>{article.body}</p>
                    </>
                )}
        </div>
    )
}