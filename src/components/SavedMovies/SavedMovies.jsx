import React, { useContext, useEffect, useState } from "react";
import "../Main/Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import api from "../../utils/MainApi";

function SavedMovies() {
  const {  savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [isShortMovie, setIsShortMovie] = useState(
    JSON.parse(localStorage.getItem("isShortLikedMovies")) ?? false
  );
  const handleShortMovieChange = (checked) => {
    setIsShortMovie(checked);
    JSON.stringify(localStorage.setItem("isShortLikedMovies", checked));
  };

  const [search, setSearch] = useState(
    localStorage.getItem("searchLiked") ?? ""
  );
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    localStorage.setItem("searchLiked", e.target.value);
  };

  const submitSearchFunc = () => {
    api
    .getMovies()
    .then((e) => {
      let filteredSavedMovies = e.filter(
        (movie) =>
          movie.nameRU.includes(search) || movie.nameEN.includes(search)
      );
      setSavedMovies(filteredSavedMovies)
      
    })
    .catch((err) => console.log("getMovies api error =", err));
  };

  const getMovies = () => {
    if (isShortMovie)
      return savedMovies.filter((movie) => movie.duration <= 40);
    return savedMovies;
  };


  useEffect(() => {
    api
      .getMovies()
      .then((e) => setSavedMovies(e))
      .catch((err) => console.log("getMovies api error =", err));
  }, []);

  return (
    <div className="page">
      <Header />
      <main>
        <SearchForm
          isShortMovie={isShortMovie}
          handleShortMovieChange={handleShortMovieChange}
          search={search}
          handleSearchChange={handleSearchChange}
          submitSearchFunc={submitSearchFunc}
        />
        <MoviesCardList data={getMovies()} isLoading={false} error={false} />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
