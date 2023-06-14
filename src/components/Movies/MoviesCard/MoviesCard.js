import React, { useState } from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';
import poster from '../../../images/poster.jpg'

function MoviesCard() {
    const location = useLocation();
    const [isSave, setSave] = useState(false);
    const handleSaveToggle = () => {
        setSave(!isSave);
    };

    return (
        <li className="moviesCard">
            <div className="moviesCard__box">
                <h2 className="moviesCard__title">Мстители</h2>
                <p className="moviesCard__duration">2:45:57 минут</p>
            </div>
            <a href="https://www.kinopoisk.ru/film/263531/" target="blank" className="card__link-movie">
                <img className="moviesCard__image-movie" src={poster} alt="превью фильма" />
            </a>
            {location.pathname === "/saved-movies" &&
                <button type="button" aria-label="удалить фильм" className="moviesCard__deleteFromSave-button"></button>}
            {location.pathname === "/movies" &&
                <button type="button" aria-label={isSave ? "удалить фильм" : "сохранить фильм"} className={isSave ? "moviesCard__delete-button" : "moviesCard__save-button"}
                    onClick={handleSaveToggle}>{isSave ? null : <span>Сохранить</span>}</button>}
        </li>
    );
}

export default MoviesCard;
