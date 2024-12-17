import { Link } from 'react-router'
import '../styles/Header.css'

export const Header = () => {
    return (
        <header>
            <Link to={"/"}>
                <img src="src/assets/top-nc-news-logo.png" alt="Top NC News logo of a top hat reading a newspaper" id='header-logo' />
            </Link>
            <img src="src/assets/user.jpeg" alt="Image of current logged in user" id='user-avatar' />
        </header >
    )
}