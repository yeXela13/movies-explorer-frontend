import React from 'react';
import './AboutProject.css'
import '../Main.css'

function AboutProject() {

  return (
    <section className='about'>
      <h2 className='main__title'>О проекте</h2>
      <div className='about__box'>
      <div className='about__container'>
        <p className='main__subtitle'>Дипломный проект включал 5&nbsp;этапов</p>
        <p className='main__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
      </div>
      <div className='about__container'>
        <p className='main__subtitle'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</p>
        <p className='main__text'>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      </div>
      <div className='about__timing'>
        <p className='about__one-week'>1 неделя</p>
        <p className='about__four-week'>4 недели</p>
        <p className='about__caption'>Back-end</p>
        <p className='about__caption'>Front-end</p>
      </div>
    </section >
  );
}

export default AboutProject;