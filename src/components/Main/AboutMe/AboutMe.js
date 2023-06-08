import React from 'react';
import './AboutMe.css'
import '../Main.css'
import photo from '../../../images/photo_student.png';

function AboutMe() {

    return (
        <section className='aboutMe'>
            <h2 className='main__title'>Студент</h2>
            <div className='aboutMe__container'>
                <div className='aboutMe__student'>
                    <h3 className='main__info'>Виталий</h3>
                    <p className='aboutMe__description'>Фронтенд-разработчик, 30&nbsp;лет</p>
                    <p className='main__text'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
                        и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
                    <p className='aboutMe__copiright'>Github</p>
                </div>
                <img className='aboutMe__photo' alt='Фотография' src={photo} />
            </div>

        </section >
    );
}

export default AboutMe;