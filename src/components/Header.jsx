import { Link } from 'react-router'
import '../styles/Header.css'
import topHat from '../assets/top-nc-news-logo.png'
import user from '../assets/user.jpeg'

export const Header = () => {
    return (
        <header>
            <Link to={"/"}>
                <img src={topHat} alt="Top NC News logo of a top hat reading a newspaper" id='header-logo' />
            </Link>
            <h1>Top NC News</h1>
            <img src={user} alt="Image of current logged in user" id='user-avatar' />
        </header >
    )
}