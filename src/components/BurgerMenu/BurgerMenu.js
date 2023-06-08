import React, { useState } from "react";
import "./BurgerMenu.css";
import burgerMenu from '../../images/burgerMenu.svg';
import burgerMenuClose from '../../images/burgerMenuClose.svg';
// import { Link } from "react-router-dom";

function BurgerMenu() {


    return (
        <section className="burger">
            <img className="" src={burgerMenu} alt="меню" />
            
        </section>
    )

}

export default BurgerMenu;