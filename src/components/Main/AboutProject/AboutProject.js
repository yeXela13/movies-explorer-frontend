import React from 'react';
import './AboutProject.css'
import bigLogo from '../../../images/bigLogo.svg';

function AboutProject() {

  return (
    <section className='about'>
      <h2 className='about__title'>О проекте</h2>
      <h3 className='about__subtitle'>Дипломный проект включал 5&nbsp;этапов</h3>
      <p className='about__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
      <h3>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
      <p className='about__text'>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
<img className='about__one-week' src='' alt='1 неделя'/>
<caption className='about__caption'>Back-end</caption>
<img className='about__four-week' src='' alt='4 недели'/>
<caption className='about__caption'>Front-end</caption>
    </section>
  );
}

export default AboutProject;