import logo from '../assets/largelogo.svg'
import { NavLink } from 'react-router-dom'

/**
 * Component of Header with the company logo 
 * and the navigation link
 *
 * @returns {JSX.Element} A Header component
 */
const Header = () => {
    return (
        <header className="header">
            <div className="header__logoctn">
                <img className="header__logo" src={logo} alt="logo" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav__listctn">
                    <li><NavLink to="#">Acceuil</NavLink></li>
                    <li><NavLink to="#">Profil</NavLink></li>
                    <li><NavLink to="#">Réglage</NavLink></li>
                    <li><NavLink to="#">Communauté</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header