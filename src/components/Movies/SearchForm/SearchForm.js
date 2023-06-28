import React from "react";
import Switch from "react-switch";
import "./SearchForm.css";

function SearchForm({
  isShortMovie,
  handleShortMovieChange,
  search,
  handleSearchChange,
  submitSearchFunc,
}) {
  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="search__container">
          <input
            className="search__input"
            name="search"
            type="text"
            placeholder="Фильм"
            required
            value={search}
            onChange={handleSearchChange}
          />
          <button className="search__button" onClick={submitSearchFunc} />
        </div>
        <label className="search__toggle">
          <Switch
            className="search__checkbox"
            checked={isShortMovie}
            onChange={handleShortMovieChange}
            onColor="#3DDC84"
            offColor="#EBEBEB"
            checkedIcon={false}
            uncheckedIcon={false}
            width={34}
            height={14}
            handleDiameter={10}
          />
          <p className="search__text">Короткометражки</p>
        </label>
      </form>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
