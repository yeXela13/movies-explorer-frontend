import React from "react";
import { Routes, Link, Route } from 'react-router-dom';
import './Navigation.css'
import profile from '../../images/profile.svg';

function Navigation({ email, onLogOut }) {

    return (
        <div className="navigation">
            <Routes>
                <Route path="/sign-in" element={
                    <Link to="/sign-up" className="navigation__registration">Регистрация</Link>} />
                <Route path="/sign-up" element={
                    <Link to="/sign-in" className="navigation__login">Войти</Link>} />
                <Route path="/" element={
                    <div className="navigation__container">
                        <Link to="/movies" className="navigation__links">Фильмы</Link>
                        <Link to="/saved-movies" className="navigation__links">Сохраненные фильмы</Link> 
                        <Link to="/profile" className="navigation__account"><img src={profile} alt='аккаунт'/></Link> 
                    </div>
                } />
            </Routes>
        </div>
    )


}

export default Navigation;