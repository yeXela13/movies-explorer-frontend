import React, { useContext } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../../context/CurrentUserContext";
import api from "../../../utils/MainApi";

function MoviesCard({ movie }) {
  const location = useLocation();
  const handleSaveToggle = (movie) => {
    if (!isSave(movie)) {
      api.createMovies({ ...movie, _id: currentUser._id }).then(e => setSavedMovies(prev => [...prev, e]))
    } else {
      let filtered = movie.id ? [...savedMovies].filter(saved => saved.movieId !== movie.id) : [...savedMovies].filter(saved => saved.movieId !== movie.movieId)
      const hexId = savedMovies.find(saved => saved.movieId === movie.id || saved.movieId === movie.movieId)._id
      if (hexId) api.deleteMovies(hexId).then(e => setSavedMovies(filtered));
    }
  };

  const isSave = (movie) => {
    if (savedMovies.find((mov) => mov.movieId === movie.id || mov.movieId === movie.movieId)) return true;
    return false;
  };

  const { currentUser, savedMovies, setSavedMovies } = useContext(CurrentUserContext);

  const isLikedMoviesPage = location.pathname === "/saved-movies";

  return (
    <li className="card" key={location.pathname.split('/')[1] + '-' + movie.id}>
      <div className="card__box">
        <h2 className="card__title">{movie.nameRU}</h2>
        <p className="card__duration">
          {`${movie.duration % 60 === 0 ? Math.floor(movie.duration / 60) + ' ч' : `${Math.floor(movie.duration / 60)} ч ${movie.duration % 60} мин`}`}
        </p>

      </div>
      <a
        href={movie.trailerLink}
        target="blank"
        className="card__link-movie"
      >
        <img
          className="card__image-movie"
          src={
            isLikedMoviesPage
              ? movie.thumbnail
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt="превью фильма"
        />
      </a>
      {location.pathname === "/saved-movies" && isSave(movie) && (
        <button
          type="button"
          aria-label="удалить фильм"
          className="card__remove-button"
          onClick={() => handleSaveToggle(movie)}
        />
      )}
      {location.pathname === "/movies" && (
        <button
          type="button"
          aria-label={isSave ? "удалить фильм" : "сохранить фильм"}
          className={
            isSave(movie) ? "card__delete-button" : "card__save-button"
          }
          onClick={() => handleSaveToggle(movie)}
        >
          {isSave(movie) ? null : <span>Сохранить</span>}
        </button>
      )}
    </li>
  );
}

export default MoviesCard;
