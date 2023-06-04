import React from 'react';
import './Header.css'
import mainLogo from '../../images/mainLogo.svg';
import Navigation from '../Navigation/Navigation'

function Header() {

    return (
        <section className='header'>
            <div className='header__container'>
            <img className='header__image' src={mainLogo} alt='лого' />
                <Navigation />
            </div>
        </section>
    );
}

export default Header;