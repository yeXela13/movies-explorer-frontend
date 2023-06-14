import React from 'react';
import '../Main/Main.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';




function Movies() {



    return (
        <main className='page'>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </main>
    );

}

export default Movies;