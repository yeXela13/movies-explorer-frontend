import '../../index.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getContent } from '../../utils/auth'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { AUTHTORIZED_ROUTES, UNAUTHTORIZED_ROUTES } from '../../routes/routes';


function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [cardMovies, setCardMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([])
    const [errors, setErrors] = useState('')
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
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
    }, [navigate])

    useEffect(() => {
        tokenCheck()
    }, []);


    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn, loading, setLoading, errors, setErrors, cardMovies, setCardMovies, savedMovies, setSavedMovies }}>
                {loggedIn? (
                    <Routes>
                        {AUTHTORIZED_ROUTES.map(route => (
                            <Route path={route.path} element={route.element} key={route.element}/>
                        ))}
                    </Routes>
                ) : (
                    <Routes>
                        {UNAUTHTORIZED_ROUTES.map(route => (
                            <Route path={route.path} element={route.element} key={route.element}/>
                        ))}
                    </Routes>
                )}
        </CurrentUserContext.Provider>
    );

}

export default App;
