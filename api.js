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

