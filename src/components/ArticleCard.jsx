import '../styles/ArticleCard.css'
import { Link } from 'react-router'
import { toTitleCase, toCapitalise } from '../utils'

export const ArticleCard = ({ article }) => {
    return (
        <Link to={`/articles/${article.article_id}`}>
            <div className="article-card"
                style={{
                    backgroundImage: `
                        linear-gradient(to bottom, rgba(168, 168, 168, 0.1), rgba(22, 22, 22, 0.7)),
                    url(${article.article_img_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <p>{toCapitalise(article.topic)} 📍</p>
                <h3>{article.author}</h3>
                <h1>{toTitleCase(article.title)}</h1>
            </div >
        </Link >
    )
}