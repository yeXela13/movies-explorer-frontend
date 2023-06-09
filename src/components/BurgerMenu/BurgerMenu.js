import React, { useState } from "react";
import "./BurgerMenu.css";
import burgerMenu from '../../images/burgerMenu.svg';
import burgerMenuClose from '../../images/burgerMenuClose.svg';
import profile from '../../images/profile.svg';
import { Link } from "react-router-dom";

function BurgerMenu() {


    return (
        <section className="burger">
            <img className="burger__image" src={burgerMenu} alt="меню" />
            <nav className="burger__menu">
                <div className="burger__container">
                <Link to="/" className="navigation__links">Главная</Link>
                <Link to="/movies" className="navigation__links">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__links">Сохраненные фильмы</Link>
                </div>
                <Link to="/profile" className="navigation__account"><img src={profile} alt='аккаунт' /></Link>
            </nav>
            <img className="burger__image" src={burgerMenuClose} alt="закрыть" />
        </section>
    )

}

export default BurgerMenu;