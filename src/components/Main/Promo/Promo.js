import React from 'react';
import './Promo.css'
import bigLogo from '../../../images/bigLogo.svg';

function Promo() {

  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <img className='promo__image' src={bigLogo} alt='лого' />
    </section>
  );
}

export default Promo;
