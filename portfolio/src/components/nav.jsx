import '../styles/nav.css' 
import { useState } from 'react'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return(
        <header className='nav'>
            <button 
                className='mobile-menu-toggle' 
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
            >
                ☰
            </button>
            
            <div 
                className={`overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>
            
            <ul className={`links ${isMenuOpen ? 'active' : ''}`} data-aos='zoom-up' data-aos-duration='1000'>
                <li><a href='#' onClick={closeMenu}>About me</a></li>
                <li><a href='#' onClick={closeMenu}>Skills</a></li>
                <li><a href='#' onClick={closeMenu}>Works</a></li>
                <li><a href='#' onClick={closeMenu}>Contact me</a></li>
            </ul>
        </header>
    )
}