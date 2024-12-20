import '../styles/ArticleCard.css'
import { Link } from 'react-router'
import { toTitleCase, toCapitalise } from '../utils'

export const ArticleCard = ({ article }) => {
    return (
        <Link to={`/articles/${article.article_id}`}>
            <div className="article-card"
                style={{
                    backgroundImage: `
                        linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
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