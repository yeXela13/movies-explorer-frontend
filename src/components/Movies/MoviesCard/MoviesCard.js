import React, { useContext } from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from "../../../context/CurrentUserContext";
import api from "../../../utils/MainApi";

function MoviesCard({data}) {
    const location = useLocation();
    const handleSaveToggle = (movie) => {
        console.log(savedMovies, movie)
        console.log(isSave(movie))
        if (!isSave(movie)) {
            setSavedMovies(prev => [...prev, movie])
            api.createMovies({...movie, _id: currentUser._id})
            console.log('save')
        }
        else {
            console.log('delete')
            setSavedMovies(savedMovies.filter(mov => mov.movieId !== movie.id))
            api.deleteMovies(movie.id)
        }
    };

    const isSave = (movie) => {
        if (savedMovies.find(mov => mov.movieId === movie.id)) return true
        return false
    }

    const {currentUser, savedMovies, setSavedMovies} = useContext(CurrentUserContext)

    return (    
        <>
        {data.map(movie => {
            return (
             <li className="card" key={movie.id}>
             <div className="card__box">
                 <h2 className="card__title">{movie.nameRU}</h2>
                     <p className="card__duration">{`${movie.duration} минут`}</p>
             </div>
             <a href={movie.trailerLink} target="blank" className="card__link-movie">
                 <img className="card__image-movie" src={`https://api.nomoreparties.co${movie.image.url}`} alt="превью фильма" />
             </a>
             {location.pathname === "/saved-movies" &&
                 <button type="button" aria-label="удалить фильм" className="card__remove-button"></button>}
             {location.pathname === "/movies" &&
                 <button type="button" aria-label={isSave ? "удалить фильм" : "сохранить фильм"} className={isSave(movie) ? "card__delete-button" : "card__save-button"}
                     onClick={() => handleSaveToggle(movie)}>{isSave(movie) ? null : <span>Сохранить</span>}</button>}
         </li>
        )})}
       
        </>
    );
}

export default MoviesCard;
