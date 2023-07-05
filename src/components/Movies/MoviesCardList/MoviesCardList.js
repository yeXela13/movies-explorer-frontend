import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

// const getInitialCardLimit = () => {
//   let windowWidth = window.screen.width;
//   if (windowWidth <= 1280 && windowWidth > 768) return 12;
//   if (windowWidth <= 768 && windowWidth > 480) return 8;
//   if (windowWidth <= 480) return 5;
//   return 12;
// };

function MoviesCardList({ data, searchPerformed, isLoading, error }) {
  const [limit, setLimit] = useState(getInitialCardLimit);
  const location = useLocation();
  const isLikedMoviesPage = location.pathname === "/saved-movies";

  function getInitialCardLimit() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1280 && windowWidth > 1276) return 12;
    if (windowWidth <= 1275 && windowWidth > 480) return 8;
    if (windowWidth <= 480) return 5;
    return 12;
  }
  const getIncrement = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1280 && windowWidth > 1276) return 3;
    if (windowWidth <= 1275 && windowWidth > 480) return 2;
    if (windowWidth <= 480) return 2;
    return 3;
  };
  const handleLimitChange = () => {
    if (limit + getIncrement() >= data.length) {
      setLimit(data.length);
    } else {
      setLimit(prevLimit => prevLimit + getIncrement());
    }
  };

  const handleResize = () => {
    setLimit(getInitialCardLimit());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setLimit(getInitialCardLimit());
  }, [data]);

  if (isLoading) return <Preloader />;
  if (error) return <p>{error}</p>;
  if (searchPerformed && !data.length) {
    return (
      <div className="cards__empty-data-root">
        <p>Фильмы не найдены</p>
      </div>
    );
  }

  return (
    <section className="cards">
      <ul className="cards__container">
        {isLikedMoviesPage ? data.map(el => {
          return (
            <MoviesCard movie={el} key={el.nameRU + '-saved'} />
          )
        }) : data.slice(0, limit).map(el => {
          return (
            <MoviesCard movie={el} key={el.nameRU} />
          )
        })
        }

      </ul>
      {!isLikedMoviesPage && limit < data.length && (
        <button
          type="button"
          aria-label="Показать больше"
          className="cards__more-button"
          onClick={() => handleLimitChange(data)}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
