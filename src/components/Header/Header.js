import React from 'react';
import './Header.css'
import mainLogo from '../../images/mainLogo.svg';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header() {

    return (
        <section className='header'>
            <div className='header__container'>
                <img className='header__image' src={mainLogo} alt='лого' />
                <BurgerMenu />
                <Navigation />
            </div>
        </section>
    );
}

export default Header;