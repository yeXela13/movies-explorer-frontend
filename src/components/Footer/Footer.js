import React from 'react';
import './Footer.css'


function Footer() {

    function getYear(date = new Date()) {
        return date.getFullYear();
      }
       return (
        <section className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h2>
            <div className='footer__container'>
                <nav className='footer__links'>
                    <a className="footer__link" href=" https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
                </nav>
                <p className='footer__copiright'>@{getYear()}</p>
            </div>
        </section>
    );
}

export default Footer;