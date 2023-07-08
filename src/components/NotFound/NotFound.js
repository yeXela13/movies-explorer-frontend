import React from "react";
import "./NotFound.css";
import {  useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate()

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <p onClick={() => navigate(-1)} className="not-found__return">Назад</p>
    </section>
  );
}

export default NotFound;