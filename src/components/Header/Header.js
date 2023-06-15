import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header() {

    return (
        <header className={`header${window.location.pathname === '/' ? ' header-main-color' : ' '}`}>
            <div className='header__container'>
                <Link to='/'><img className='header__image' src={mainLogo} alt='лого' /></Link>
                <Navigation />
                <BurgerMenu />
            </div>
        </header>
    );
}

export default Header;