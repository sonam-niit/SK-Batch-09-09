import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='about'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='projects'>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
