import React, { useCallback, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Main.css'
import Header from '../Header/Header';
import Promo from './Promo/Promo'



function Main() {



    return (
        <main className='page'>
            <Header />
            <Promo />
            
        </main>
    );

}

export default Main;
