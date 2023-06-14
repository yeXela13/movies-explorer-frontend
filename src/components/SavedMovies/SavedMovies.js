import React from 'react';
import '../Main/Main.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies() {



    return (
        <main className='page'>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </main>
    );

}

export default SavedMovies;