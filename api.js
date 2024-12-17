import axios from 'axios'

const api = axios.create({
    baseURL: 'https://top-nc-news.onrender.com/api'
})

export const fetchAllArticles = async () => {
    const { data: articles } = await api.get('/articles')

    try {
        return articles
    } catch (error) {
        return error
    }
}

export const fetchArticleById = async (article_id) => {
    const { data: { article } } = await api.get(`/articles/${article_id}`)

    try {
        return article
    } catch (error) {
        return error
    }
}

export const fetchComments = async (article_id) => {
    const { data: { comments } } = await api.get(`/articles/${article_id}/comments`)

    try {
        return comments
    } catch (error) {
        return error
    }
}