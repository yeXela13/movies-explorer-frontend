import React, { useState } from "react";
import './MoviesCardList.css'
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

const getInitialCardLimit = () => {
  let windowWidth = window.screen.width
  if (windowWidth <= 1280 && windowWidth > 768) return 12
  if (windowWidth <= 768 && windowWidth > 480) return 8
  if (windowWidth <= 480) return 5

  return 12
} 

function MoviesCardList({data, isLoading, error}) {
  const initialLimit = getInitialCardLimit()
  const [limit, setLimit] = useState(getInitialCardLimit)



  const handleLimitChange = (movies) => {
    if (initialLimit === 12) {
        if ((limit + 3) >= movies.length) {
            setLimit(movies.length)
            return
        }
        setLimit((prev) => prev + 3)
    }
    if (initialLimit === 8 || initialLimit === 5) {
        if ((limit + 2) >= movies.length) {
            setLimit(movies.length)
            return
        }
        setLimit(prev => prev + 2)
    }

  }
  if (!data.length) {
    return (
      <p>Фильмы не найдены</p>
    )
  }
  if (isLoading) return <Preloader/>
  if (error) return <p>{error}</p>
  return (
    <section className="cards">
      <ul className="cards__container">
        <MoviesCard
        data={data.slice(0, limit)}
        />
      </ul>
        {limit < data.length && <button type="button" aria-label="Показать больше" className="cards__more-button" onClick={() => handleLimitChange(data)}>Ещё</button>}
    </section>
  );
}

export default MoviesCardList;