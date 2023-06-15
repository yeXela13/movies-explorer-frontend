import React from 'react';
import './Techs.css'
import '../Main.css'

function Techs() {

    return (
        <section className='techs'>
            <h2 className='main__title'>Технологии</h2>
            <div className='techs__container'>
                <h3 className='main__info'>7 технологий</h3>
                <p className='main__text'>На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
                </div>
                <ul className='techs__list'>
                    <li className='techs__item'>HTML</li>
                    <li className='techs__item'>CSS</li>
                    <li className='techs__item'>JS</li>
                    <li className='techs__item'>React</li>
                    <li className='techs__item'>Git</li>
                    <li className='techs__item'>Express.js</li>
                    <li className='techs__item'>mongoDB</li>
                </ul>
        </section >
    );
}

export default Techs;