import React from 'react';
import './Portfolio.css'
import '../Main.css'
import arrow from '../../../images/arrow.svg';

function Portfolio() {

    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <nav className='portfolio__links'>
                <div className='portfolio__container'>
                <p className='portfolio__text'>Статичный сайт</p>
                <a className='portfolio__link' href="https://github.com/yeXela13/how-to-learn/" target="blank" rel="noopener noreferrer"><img className='portfolio__arrow' src={arrow} alt='перейти'/></a>
                </div>
                <div className='portfolio__container'>
                <a className='portfolio__text'>Адаптивный сайт</a>
                <a className='portfolio__link' href="https://github.com/yeXela13/russian-travel" target="blank" rel="noopener noreferrer"><img className='portfolio__arrow' src={arrow} alt='перейти'/></a>
                </div>
                <div className='portfolio__container'>
                <a className='portfolio__text'>Одностраничное приложение</a>
                <a className='portfolio__link' href="https://github.com/yeXela13/react-mesto-api-full-gha" target="blank" rel="noopener noreferrer"><img className='portfolio__arrow' src={arrow} alt='перейти'/></a>
                </div>
            </nav>

        </section >
    );
}

export default Portfolio;


