import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";



function MoviesCardList() {

  return (
    <section className="cardList">
      <ul className="cardList__container">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      </ul>
        <button type="button" aria-label="Показать больше" className="cardList__more-button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;