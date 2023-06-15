import React from 'react';
import './Portfolio.css'
import '../Main.css'
import arrow from '../../../images/arrow.svg';

function Portfolio() {

    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <nav className='portfolio__links'>
                <ul className='portfolio__container'>
                <li><a className='portfolio__text' href="https://github.com/yeXela13/how-to-learn/" target="blank" rel="noopener noreferrer">Статичный сайт</a></li>
                <li><a className='portfolio__link' href="https://github.com/yeXela13/how-to-learn/" target="blank" rel="noopener noreferrer"><img className='portfolio__arrow' src={arrow} alt='перейти'/></a></li>
                </ul>
                <ul className='portfolio__container'>
                <li><a className='portfolio__text' href="https://github.com/yeXela13/russian-travel" target="blank" rel="noopener noreferrer">Адаптивный сайт</a></li>
                <li><a className='portfolio__link' href="https://github.com/yeXela13/russian-travel" target="blank" rel="noopener noreferrer"><img className='portfolio__arrow' src={arrow} alt='перейти'/></a></li>
                </ul>
                <ul className='portfolio__container'>
                <li><a className='portfolio__text' href="https://github.com/yeXela13/react-mesto-api-full-gha" target="blank" rel="noopener noreferrer">Одностраничное приложение</a></li>
                <li><a className='portfolio__link' href="https://github.com/yeXela13/react-mesto-api-full-gha" target="blank" rel="noopener noreferrer"><img className='portfolio__arrow' src={arrow} alt='перейти'/></a></li>
                </ul>
            </nav>

        </section >
    );
}

export default Portfolio;


