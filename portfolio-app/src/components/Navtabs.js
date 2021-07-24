import React from 'react';
import {Link} from 'react-router-dom';

function Navtabs() {
    return (
        <div>
            <ul className='nav'>
                <li className='nav-link'>
                    <Link to={`/home`}>
                        Home
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to={`/projects`}>
                        Projects
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to={`/`}>
                        About Me
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to={`/contact`}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navtabs;