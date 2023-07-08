import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Header() {
    const { loggedIn } = useContext(CurrentUserContext);


    return (
        <header className={`header${window.location.pathname === '/' ? ' header-main-color' : ' '}`}>
            <div className='header__container'>
                <Link to='/'><img className='header__image' src={mainLogo} alt='лого' /></Link>
                {loggedIn ? (
                    <>
                        <Navigation />
                        <BurgerMenu />
                    </>
                ) : (
                    <div className=''>
                        <Link to="/signup" className="header__registration">Регистрация</Link>
                        <Link to="/signin" className="header__login">Войти</Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;