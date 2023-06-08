import React from "react";
import "./NotFound.css";
import { Link } from 'react-router-dom';

function NotFound() {
  return(
    <section className="notFound">
        <div className="notFound__container">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__text">Страница не найдена</p>
      </div>
      <Link to="/" className="notFound__return">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;