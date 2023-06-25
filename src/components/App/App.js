import '../../index.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';
import { getContent } from '../../utils/auth'
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute'
import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Movies/Preloader/Preloader';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const tokenCheck = useCallback(async () => {
        const token = localStorage.getItem('token')
        setLoading(false)
        if (token) {
            try {
                const user = await getContent(token);
                if (!user) {
                    throw new Error('пользователь с email не найден')
                }
                if (!token) {
                    throw new Error('Токен не передан или передан не в том формате')
                }
                setLoggedIn(true)
                setLoading(true)
                navigate("/movies", { replace: true })
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
    }, [navigate])


    useEffect(() => {
        tokenCheck();
    }, []);

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn, loading, setLoading }}>
            {loading ? (
                <Preloader />
            ) : (
                <Routes>
                    <Route path="/" loggedIn={loggedIn} element={<Main />} />

                    <Route path="/signin" loggedIn={loggedIn}
                        element={
                            <Login
                            />} />

                    <Route path="/signup" loggedIn={loggedIn}
                        element={
                            <Register
                            />}
                    />

                    <Route path="/movies" element={
                        <ProtectedRouteElement
                            loggedIn={loggedIn}
                            element={Movies}
                        />} />
                    <Route path="/saved-movies" element={
                        <ProtectedRouteElement
                            loggedIn={loggedIn}
                            element={SavedMovies}
                        />} />
                    <Route path="/profile" element={
                        <ProtectedRouteElement
                            loggedIn={loggedIn}

                            element={Profile}
                        />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            )}
        </CurrentUserContext.Provider>
    );

}

export default App;
