import React, { useCallback, useState, useEffect } from 'react';
import Switch from 'react-switch';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './SearchForm.css'
import search from '../../../images/search.svg'

function SearchForm() {
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchChange = (checked) => {
        setIsChecked(checked);
    }

    return (
        <section className="searchForm">
            <form className="searchForm__form">
                <div className="searchForm__container">
                    <input className="searchForm__input" name="search" type="text" placeholder="Фильм" required />
                    <button className="searchForm__button"></button>
                </div>
                <label className="searchForm__toggle">
                    <Switch
                        className="searchForm__checkbox"
                        checked={isChecked}
                        onChange={handleSwitchChange}
                        onColor="#3DDC84"
                        offColor="#EBEBEB"
                        checkedIcon={false}
                        uncheckedIcon={false}
                        width={34}
                        height={14}
                        handleDiameter={10}
                    />
                    <p className="searchForm__text">Короткометражки</p>
                </label>
            </form>
            <div className='searchForm__line'></div>
        </section>
    );

}

export default SearchForm;