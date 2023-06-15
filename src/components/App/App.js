import '../../index.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main.js'
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
function App() {



    return (
        <BrowserRouter>
            <Routes>

            <Route exact path="/" element={<Main/>} />
            <Route exact path="/movies" element={<Movies/>} />
            <Route exact path="/saved-movies" element={<SavedMovies/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/sign-in" element={<Login/>} />
            <Route exact path="/sign-up" element={<Register/>} />
            <Route exact path="*" element={<NotFound/>} />
                
            </Routes>
        </BrowserRouter>
    );

}

export default App;
