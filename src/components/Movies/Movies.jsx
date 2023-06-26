import React from 'react';
import '../Main/Main.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../context/CurrentUserContext';



function Movies() {
    const { cardMovies, setCardMovies, currentUser, setCurrentUser, setLoggedIn } = React.useContext(CurrentUserContext);



    return (
        <div className='page'>
            <Header />
            <main>
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </div>
    );

}

export default Movies;