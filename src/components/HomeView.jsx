import { FeedView } from "./FeedView"
import { ArticleView } from "./ArticleView"
import { Routes, Route } from 'react-router'

export const HomeView = () => {
    return (
        <Routes>
            <Route path='/' element={<FeedView />}></Route>
            <Route path='/articles/:article_id' element={<ArticleView />}></Route>
        </Routes>
    )
}