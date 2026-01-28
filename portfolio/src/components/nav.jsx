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

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        closeMenu()
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return(
        <header className='nav'>
            <button 
                className='mobile-menu-toggle' 
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>
            
            <div 
                className={`overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>
            
            <ul className={`links ${isMenuOpen ? 'active' : ''}`} data-aos='zoom-up' data-aos-duration='1000'>
                <li><a href='#about' onClick={(e) => handleNavClick(e, 'about')}>About me</a></li>
                <li><a href='#skills' onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
                <li><a href='#projects' onClick={(e) => handleNavClick(e, 'projects')}>Works</a></li>
                <li><a href='#contact' onClick={(e) => handleNavClick(e, 'contact')}>Contact me</a></li>
            </ul>
        </header>
    )
}