import { useState, useEffect } from 'react'
import { fetchAllArticles } from '../../api'
import { ArticleCard } from './ArticleCard'
import { SkeletonCard } from './SkeletonCard'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/FeedView.css'

export const FeedView = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchArticles = async () => {
        try {
            setLoading(true)
            const { articles } = await fetchAllArticles()
            setArticles(articles)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchArticles()
    }, [])

    return (
        <section className="feed-view">
            {isLoading
                ? Array.from({ length: 10 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))
                : articles.map((article, index) => {
                    return <ArticleCard key={index} article={article} />
                })
            }
        </section>
    )
}