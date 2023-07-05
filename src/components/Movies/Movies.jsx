import React, { useContext, useEffect, useState } from "react";
import "../Main/Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import findMovies from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import api from "../../utils/MainApi";

function Movies() {
  const { setCurrentUser, savedMovies, setSavedMovies } =
    useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const [searchResults, setSearchResults] = useState(
    JSON.parse(localStorage.getItem("movies")) ?? []
  );
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("movies")) ?? []
  );
  const [error, setError] = useState("");
  const [isShortMovie, setIsShortMovie] = useState(
    JSON.parse(localStorage.getItem("isShortMovie")) ?? false
  );
  const handleShortMovieChange = (checked) => {
    setIsShortMovie(checked);
    JSON.stringify(localStorage.setItem("isShortMovie", checked));
  };

  const [search, setSearch] = useState(localStorage.getItem("search") ?? "");
  const [searchError, setSearchError] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchError("");
    localStorage.setItem("search", e.target.value);
  };

  const submitSearchFunc = () => {
    if (!search.trim()) {
      setSearchError("Нужно ввести ключевое слово");
      return;
    }
    if (searchResults.length > 0) {
      const movies = searchResults.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(search.toLowerCase())
      );
      setData(movies);
      localStorage.setItem("movies", JSON.stringify(movies));
    } else {
      setIsLoading(true);
      setSearchPerformed(true);
      findMovies()
        .then((e) => {
          let movies = e.filter(
            (movie) =>
              movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(search.toLowerCase())
          );
          setData(movies);
          setSearchResults(movies);
          localStorage.setItem("movies", JSON.stringify(movies));
        })
        .catch((e) => setError(e))
        .finally(() => setIsLoading(false));
    }
  };


  const getMovies = () => {
    if (isShortMovie) return data.filter((movie) => movie.duration <= 40);
    return data;
  };

  useEffect(() => {
    api
      .getMovies()
      .then((e) => setSavedMovies(e))
      .catch((err) => console.log("getMovies api error =", err));

    api
      .getUserInfo()
      .then((e) => {
        setCurrentUser(e)
      })
      .catch((err) => console.log("getUserInfo api error = ", err));
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) setData(movies);
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
          searchError={searchError}
        />
        <MoviesCardList
          data={getMovies()}
          isLoading={isLoading}
          error={error}
          searchPerformed={searchPerformed}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
