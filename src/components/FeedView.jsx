import { useState, useEffect } from 'react'
import { fetchAllArticles } from '../../api'
import { ArticleCard } from './ArticleCard'

export const FeedView = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchArticles = async () => {
            const { articles } = await fetchAllArticles()
            setArticles(articles)
        }
        fetchArticles()
    }, [])

    return (
        articles.map((article, index) => {
            return <ArticleCard key={index} article={article} />
        })
    )
}