import '../../index.css';
import React, { useCallback, useState, useEffect } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main.js'
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
function App() {



    return (
        <BrowserRouter>
            <Main></Main>
            <NotFound />
        </BrowserRouter>
    );

}

export default App;
