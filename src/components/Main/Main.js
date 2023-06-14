import React from 'react';
import './Main.css'
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Portfolio from './Portfolio/Portfolio';


function Main() {

    return (
        <main className='page'>
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
