import React from 'react';
import './Main.css'
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';

function Main({loggedIn}) {

    return (
        <div className='page'>
            <Header loggedIn={loggedIn} />
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </div>
 );
}

export default Main;
