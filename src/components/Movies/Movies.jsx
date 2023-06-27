import React, { useContext, useEffect, useState } from 'react';
import '../Main/Main.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import findMovies from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import api from '../../utils/MainApi';
import { useLocation, useSearchParams } from 'react-router-dom';
import { memo } from 'react';




function Movies() {
  const {setCurrentUser, savedMovies, setSavedMovies} = useContext(CurrentUserContext)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(JSON.parse(localStorage.getItem('movies')) ?? [])
  const [error, setError] = useState('')
  const [isShortMovie, setIsShortMovie] = useState(JSON.parse(localStorage.getItem('isShortMovie')) ?? false);
  const handleShortMovieChange = (checked) => {
    setIsShortMovie(checked);
    JSON.stringify(localStorage.setItem('isShortMovie', checked))
  }

  const [search, setSearch] = useState(localStorage.getItem('search') ?? '')
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    localStorage.setItem('search', e.target.value)
} 
  const submitSearchFunc = () => {
    if (!search) return
    setIsLoading(true)
    findMovies().then(e => {
        let movies = e.filter(movie => movie.nameRU.includes(search) || movie.nameEN.includes(search))
        setData(movies)
        localStorage.setItem('movies', JSON.stringify(movies))
    }).catch(e => setError(e)).finally(() => setIsLoading(false))
  }

  const getMovies = () => {
    if (isShortMovie) return data.filter(movie => movie.duration <= 40)
    return data
  }

  useEffect(() => {
    api.getMovies().then(e => setSavedMovies(e)).catch(err => console.log('getMovies api error =', err))
  }, [savedMovies.length])

  useEffect(() => {
    api.getUserInfo().then(e => setCurrentUser(e)).catch(err => console.log('getUserInfo api error = ', err))
    let movies = JSON.parse(localStorage.getItem('movies'))
    if (movies) setData(movies)
  }, [])


    return (
        <div className='page'>
            <Header />
            <main>
                <SearchForm isShortMovie={isShortMovie} handleShortMovieChange={handleShortMovieChange} search={search} handleSearchChange={handleSearchChange} submitSearchFunc={submitSearchFunc}/>
                <MoviesCardList data={getMovies()} isLoading={isLoading} error={error}/>
            </main>
            <Footer />
        </div>
    );

}

export default memo(Movies);