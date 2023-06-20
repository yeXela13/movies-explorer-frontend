import '../../index.css';
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';
import { registration, authorization, getContent } from '../../utils/auth'
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute'
import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Movies/Preloader/Preloader';

export const CurrentUserContext = createContext();

function App() {

    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const [userLoginData, setLoginData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        loggedIn &&
            Promise.all([api.getUserInfo(),])
                .then(([userData, cardsData]) => {
                    setCurrentUser(userData);
                    // setCards(cardsData.reverse());
                })
                .catch((res) => console.log(res));
    }, [loggedIn]);

    const authenticate = useCallback(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            setLoggedIn(true);
        }
    }, [])

    const register = useCallback(async (userRegistrData) => {
        try {
            const data = await registration(userRegistrData)
            authenticate(data);
            navigate("/signin", { replace: true });
        } catch (e) {
            console.error(e)
        }
        finally {
            setLoading(false)
        }
    }, [authenticate, navigate]);

    const login = useCallback(async (userLoginData) => {
        try {
            const data = await authorization(userLoginData)
            authenticate(data);
            navigate("/", { replace: true });
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }, [authenticate, navigate])

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
                navigate("/", { replace: true })
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
    }, [navigate])

    const logout = useCallback(() => {
        localStorage.removeItem('token')
        setLoggedIn(false)
        userLoginData({ email: '', password: '' })
        navigate("/signin", { replace: true });
        setLoading(false)
    }, [navigate])

    useEffect(() => {
        tokenCheck();
    }, [tokenCheck]);

    // if (loading) {
    //     return Preloader;
    // }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Routes>
                <Route index path="/" element={<Main />} />

                <Route path="/signin" loggedIn={loggedIn}
                    element={
                        <Login
                            onLogin={login}

                        />} />
                <Route path="/signup" element={
                    <Register
                        onRegister={register}
                    />}
                />

                <Route path="/movies" element={
                    <ProtectedRouteElement
                        loggedIn={loggedIn}
                        element={<Movies />}
                    />} />
                <Route path="/saved-movies" element={
                    <ProtectedRouteElement
                        loggedIn={loggedIn}
                        element={<SavedMovies />}
                    />} />
                <Route path="/profile" element={
                    <ProtectedRouteElement
                        loggedIn={loggedIn}
                        onLogout={logout}
                        element={<Profile />}
                    />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </CurrentUserContext.Provider>
    );

}

export default App;
