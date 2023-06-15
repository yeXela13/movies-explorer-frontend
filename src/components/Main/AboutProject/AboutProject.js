import React from 'react';
import './AboutProject.css'
import '../Main.css'

function AboutProject() {

  return (
    <section className='project'>
      <h2 className='main__title'>О проекте</h2>
      <div className='project__box'>
      <div className='project__container'>
        <p className='main__subtitle'>Дипломный проект включал 5&nbsp;этапов</p>
        <p className='main__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
      </div>
      <div className='project__container'>
        <p className='main__subtitle'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</p>
        <p className='main__text'>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      </div>
      <div className='project__timing'>
        <p className='project__one-week'>1 неделя</p>
        <p className='project__four-week'>4 недели</p>
        <p className='project__caption'>Back-end</p>
        <p className='project__caption'>Front-end</p>
      </div>
    </section >
  );
}

export default AboutProject;