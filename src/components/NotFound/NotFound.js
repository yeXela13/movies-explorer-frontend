import React from "react";
import "./NotFound.css";
import { Link } from 'react-router-dom';

function NotFound() {

  console.log('ggg')

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link to="/" className="not-found__return">Назад</Link>
    </section>
  );
}

export default NotFound;