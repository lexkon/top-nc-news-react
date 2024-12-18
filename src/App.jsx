import { Header } from "./components/Header"
import { FeedView } from "./components/FeedView"
import { ArticleView } from "./components/ArticleView"
import { NotFound } from "./components/NotFound"
import { Routes, Route } from 'react-router'
import './styles/App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<FeedView />}></Route>
        <Route path='/articles/:article_id' element={<ArticleView />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes >
    </>
  )
}

export default App
