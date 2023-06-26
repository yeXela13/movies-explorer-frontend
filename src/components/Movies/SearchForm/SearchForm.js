import React, { useCallback, useState, useEffect } from 'react';
import Switch from 'react-switch';
import './SearchForm.css'
import findMovies from '../../../utils/MoviesApi';
import { Routes, Route, useNavigate } from 'react-router-dom';
import search from '../../../images/search.svg'
import { CurrentUserContext } from '../../../context/CurrentUserContext';

function SearchForm() {
    const { cardMovies, setCardMovies, currentUser, setCurrentUser, loading, setLoading } = React.useContext(CurrentUserContext);
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchChange = (checked) => {
        setIsChecked(checked);
    }


    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await findMovies()
            .then((dataMovies) => {
  
                    setCardMovies(
                        dataMovies.map((item) => ({
                            country: item.country,
                            id: item.id,
                            created_at: item.created_at,
                            description: item.description,
                            director: item.director,
                            duration: item.duration,
                            nameEN: item.nameEN,
                            nameRU: item.nameRU,
                            trailerLink: item.trailerLink,
                            updated_at: item.updated_at,
                            year: item.year,
                            image: item.image
                        }))
                        )
                        
                    })
                } catch (error) {
                    console.log(error)  
                }
                finally {
                    setLoading(false)

                }
                
            }, [setCardMovies]);
            
            console.log(cardMovies)



    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <div className="search__container">
                    <input className="search__input" name="search" type="text" placeholder="Фильм" required />
                    <button className="search__button"></button>
                </div>
                <label className="search__toggle">
                    <Switch
                        className="search__checkbox"
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
                    <p className="search__text">Короткометражки</p>
                </label>
            </form>
            <div className='search__line'></div>
        </section>
    );

}

export default SearchForm;