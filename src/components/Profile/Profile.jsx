import React, { useEffect, useCallback, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import './Profile.css'
import '../Main/Main.css'
import Header from '../Header/Header';
import api from '../../utils/MainApi'
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile() {
    const { loading, setLoading, currentUser, setCurrentUser, setLoggedIn } = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isChange, setChange] = useState(false);
    const [registrationError, setRegistrationError] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const isDisabled = !isNameValid || !isEmailValid || !isChange || (currentUser.name === name && currentUser.email === email)
    const navigate = useNavigate();

    const profileEditBtnClasses = `profile__button_edit ${isDisabled && 'profile__button_edit_disabled'}`

    useEffect(() => {
        api.getUserInfo()
            .then(data => {
                setCurrentUser(data);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    function handleNameChange(e) {
        const newName = e.target.value;
        setName(newName);
        setIsNameValid(/^[a-zA-Zа-яА-Я\s-]+$/.test(newName));
    }

    function handleEmailChange(e) {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsEmailValid(validator.isEmail(newEmail));
    }

    useEffect(() => {
        if ((currentUser.name !== name || currentUser.email !== email)) {
            setChange(true);
        } else {
            setChange(false);
        }
    }, [currentUser, email, name])

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (isNameValid && isEmailValid) {
            try {
                await api.setUserInfo(name, email);
                setCurrentUser({ name, email });
                setShowSuccessMessage(true);
                setLoading(true);
            } catch (error) {
                if (error === 'Ошибка: 409 Conflict') {
                    setRegistrationError('Пользователь с таким email уже существует');
                } else {
                    setRegistrationError('При обновления профиля произошла ошибка');
                }
            } finally {
                setChange(false);
                setLoading(false);
            }
        }
    }, [name, email, isNameValid, isEmailValid, isChange]);

    const logout = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            localStorage.clear();
            setLoggedIn(false);
            navigate("/", { replace: true });
            setLoading(false);
        }, 500);
    }, []);


    useEffect(() => {
        if (showSuccessMessage) {
            const timeout = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 10000);

            return () => clearTimeout(timeout);
        }
    }, [showSuccessMessage]);

    return (
        <>
            <Header />
            <section className='profile'>
                <div className='profile__container'>
                    <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
                    <form onSubmit={handleSubmit} className='profile__form'>
                        <fieldset className='profile__fieldset'>
                            <label className='profile__fields'>
                                <p className='profile__input-name'>Имя</p>
                                <input
                                    className='profile__input'
                                    value={name || ""}
                                    onChange={handleNameChange}
                                    type='text'
                                    name='name'
                                    placeholder='Имя'
                                />
                            </label>
                            {!isNameValid && <span className='profile__error'>Некорректное имя</span>}
                            <label className='profile__fields'>
                                <p className='profile__input-email'>E-mail</p>
                                <input
                                    className='profile__input'
                                    value={email || ""}
                                    onChange={handleEmailChange}
                                    type='email'
                                    name='email'
                                    placeholder='E-mail'
                                />
                            </label>
                            {!isEmailValid && <span className='profile__error'>Введите корректный e-mail</span>}
                            {registrationError && <span className="register__error">{registrationError}</span>}
                            {showSuccessMessage && <span className="profile__success">Профиль успешно сохранен!</span>}
                        </fieldset>
                        <div className='profile__box'>
                            <button className={profileEditBtnClasses} type='submit' disabled={isDisabled || loading}>Редактировать</button>
                            <button className='profile__button_logout' onClick={logout}>Выйти из аккаунта</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}


export default Profile;
