import '../../index.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getContent } from '../../utils/auth'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { getRoutes } from '../../routes/getRoutes';
import Main from '../Main/Main';
import Preloader from '../Movies/Preloader/Preloader';

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [cardMovies, setCardMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([])
    const [errors, setErrors] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const contextValue = { currentUser, setCurrentUser, loggedIn, setLoggedIn, loading, setLoading, errors, setErrors, cardMovies, setCardMovies, savedMovies, setSavedMovies }
    const navigate = useNavigate();

    const { AUTHTORIZED_ROUTES, UNAUTHTORIZED_ROUTES } = getRoutes()

    const routes = useMemo(() => {
        if (loggedIn) return AUTHTORIZED_ROUTES
        return UNAUTHTORIZED_ROUTES
    }, [loggedIn])

    const tokenCheck = useCallback(async () => {
        const token = localStorage.getItem('token')
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
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        else {
            setLoggedIn(false)
            setLoading(false)
        }
    }, [navigate])

    useEffect(() => {
        tokenCheck()
    }, []);

    if (loading) return <Preloader />

    return (
        <CurrentUserContext.Provider value={contextValue}>

            {loggedIn ? (
                <Routes>
                    <Route path='/' element={<Main />} />
                    {AUTHTORIZED_ROUTES.map(route => (
                        <Route path={route.path} element={route.element} key={route.path} />
                    ))}
                </Routes>) : (
                <Routes>
                    <Route path='/' element={<Main />} />
                    {UNAUTHTORIZED_ROUTES.map(route => (
                        <Route path={route.path} element={route.element} key={route.path} />
                    ))}
                </Routes>
            )}

        </CurrentUserContext.Provider>
    );

}

export default App;
