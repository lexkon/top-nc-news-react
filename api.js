import axios from 'axios'

const api = axios.create({
    baseURL: 'https://top-nc-news.onrender.com/api'
})

export const getAllArticles = async () => {
    const { data: articles } = await api.get('/articles')
    return articles
}

export const getArticleById = async (article_id) => {
    const { data: { article } } = await api.get(`/articles/${article_id}`)
    return article
}

export const getComments = async (article_id) => {
    const { data: { comments } } = await api.get(`/articles/${article_id}/comments`)
    return comments
}

export const patchArticleVotes = async (article_id, newVote) => {
    const { data: { article } } = await api.get(
        `/articles/${article_id}`,
        {
            inc_votes: newVote
        }
    )
    return article
}