import React, { useState } from "react";
import "./BurgerMenu.css";
import burgerMenu from '../../images/burgerMenu.svg';
import burgerMenuClose from '../../images/burgerMenuClose.svg';
import profile from '../../images/profile.svg';
import { Link } from "react-router-dom";

function BurgerMenu() {

const [openBurger, setOpenBurger] = useState(false);

    function openMenu() { 
        setOpenBurger(true); 
        } 
        
        function closeMenu() { 
        setOpenBurger(false); 
        }
       

    return (
        <section className="burger">
        {/* <img className="burger__image" src={burgerMenu} alt="меню" /> */}
            <nav className={openBurger ? ["burger__menu", "burger__menu_active"].join(' ') : ["burger__menu"]}>
                <div className="burger__container">
                <Link to="/" className="navigation__links">Главная</Link>
                <Link to="/movies" className="navigation__links">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__links">Сохраненные фильмы</Link>
                </div>
                <Link to="/profile" className="navigation__account"><img src={profile} alt='аккаунт' /></Link>
            </nav>
            {openBurger ? <img className="burger__image" src={burgerMenuClose} alt="закрыть" onClick={closeMenu}/> : <img className="burger__image" src={burgerMenu} alt="меню" onClick={openMenu}/>}        </section>
    )

}

export default BurgerMenu;