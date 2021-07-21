import React from 'react';
import "./Header.module.css";


function Header({ currentPage, handlePageChange }) {
    return (
        <div className="headerDiv">
        <header>
            <h1>Ryan Potere</h1>
        </header>
        <ul className='nav'>
            <li className='nav-item'>
                <span href="#home" onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                </span>
            </li>
            <li className='nav-item'>
                <span href="#projects" onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </span>
            </li>
            <li className='nav-item'>
                <a href="#about" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className='nav-item'>
                <a href="#conactMe" onClick={() => handlePageChange('ContactMe')}
                className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Header;