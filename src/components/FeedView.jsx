import { useState, useEffect } from 'react'
import { getAllArticles } from '../../api'
import { ArticleCard } from './ArticleCard'
import { SkeletonCard } from './SkeletonCard'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/FeedView.css'

export const FeedView = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getArticles = async () => {
        try {
            setIsLoading(true)
            const { articles } = await getAllArticles()
            setArticles(articles)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        getArticles()
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