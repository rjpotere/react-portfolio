import React from 'react';

function Navtabs({ currentPage, handlePageChange }) {
    return (
        <div>
        <ul className='nav'>
            <li className='nav-item'>
                <a href="/home" onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                </a>
            </li>
            <li className='nav-item'>
                <a href="/projects" onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
            </li>
            <li className='nav-item'>
                <a href="/" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className='nav-item'>
                <a href="/contactMe" onClick={() => handlePageChange('ContactMe')}
                className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Navtabs;