import '../styles/ArticleCard.css'
import { Link } from 'react-router'

export const ArticleCard = ({ article }) => {
    return (
        <div className="article-card"
            style={{
                backgroundImage: `url(${article.article_img_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <Link to={`/articles/${article.article_id}`}>
                <h1>{article.title}</h1>
            </Link>
            <h3>{article.author}</h3>
            <p>{article.topic}</p>
        </div >
    )
}

