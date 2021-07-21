import React from 'react';
import "./Header.module.css";


function Header({ currentPage, handlePageChange }) {
    return (
        <div className="headerDiv">
        <header>
            <h1>Ryan Potere</h1>

        <ul className='nav'>
            <li className='nav-item'>
                <a href="#home" onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                </a>
            </li>
            <li className='nav-item'>
                <a href="#projects" onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
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
        </header>
        </div>
    )
}

export default Header;