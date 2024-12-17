import '../styles/ArticleCard.css'

export const ArticleCard = ({ article }) => {
    return (
        <div className="article-card"
            style={{
                backgroundImage: `url(${article.article_img_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <h1>{article.title}</h1>
            <h3>{article.author}</h3>
            <p>{article.topic}</p>
        </div >
    )
}

