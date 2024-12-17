import { Header } from "./components/Header"
import { HomeView } from "./components/HomeView"
import { FeedView } from "./components/FeedView"
import { ArticleView } from "./components/ArticleView"
import { Routes, Route } from 'react-router'
import './styles/App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />}>
          <Route path='/' element={<FeedView />}></Route>
          <Route path='/articles/:article_id' element={<ArticleView />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
