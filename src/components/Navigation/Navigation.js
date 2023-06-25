import React, { useContext } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import './Navigation.css'
import profile from '../../images/profile.svg';

function Navigation() {
    const pathname = window.location.pathname;

    return (
        <section className="navigation">
            <Routes>
                <Route path="/signin" element={
                    <Link to="/signup" className="navigation__registration">Регистрация</Link>} />
                <Route path="/signup" element={
                    <Link to="/signin" className="navigation__login">Войти</Link>} />
                <Route path="/" element={
                    <div className="navigation__container">
                        <Link to="/movies" className={`navigation__links ${pathname === "/movies" ? 'navigation__active' : ' '}`}>Фильмы</Link>
                        <Link to="/saved-movies" className={`navigation__links ${pathname === "/saved-movies" ? 'navigation__active' : ' '}`}>Сохраненные фильмы</Link>
                        <Link to="/profile" className={`navigation__account ${pathname === "/profile" ? 'navigation__active' : ' '}`}><img src={profile} alt='аккаунт' /></Link>
                    </div>
                } />
            </Routes>
        </section>
    )


}

export default Navigation;