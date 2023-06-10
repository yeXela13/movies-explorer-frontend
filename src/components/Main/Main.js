import React, { useCallback, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Main.css'
import Header from '../Header/Header';
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Portfolio from './Portfolio/Portfolio';
import NotFound from '../NotFound/NotFound';



function Main() {



    return (
        <main className='page'>
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />

        </main>
    );

}

export default Main;
