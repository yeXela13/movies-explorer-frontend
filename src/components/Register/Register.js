import React, { useCallback, useState, useContext } from 'react';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { Link } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';
import { registration } from '../../utils/auth';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Register() {
    const { setCurrentUser, setLoggedIn } = useContext(CurrentUserContext);
    const [userRegistrData, setRegistrData] = useState({ name: '', email: '', password: '' });
    const [registrationError, setRegistrationError] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const navigate = useNavigate();


    const handleChange = async (e) => {
        const { name, value } = e.target;
        setRegistrData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === 'name') {
            const isValidName = validator.matches(value, /^[a-zA-Zа-яА-Я\s-]+$/);
            setIsNameValid(isValidName);
        }
        if (name === 'email') {
            const isValidEmail = validator.isEmail(value);
            setIsEmailValid(isValidEmail);
        }
    };

    const handleSubmit = useCallback(async (e) => {
        try {
            if (!isEmailValid || !isNameValid) {
                return;
            }
            e.preventDefault();
            const data = await registration(userRegistrData)
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            setCurrentUser(userRegistrData);
            setLoggedIn(true);
            navigate("/movies", { replace: true });
        } catch (error) {
            console.log(error)
            if (error.response && error.response.status === 409) {
                setRegistrationError('Пользователь с таким email уже существует');
            } else {
                setRegistrationError('При регистрации пользователя произошла ошибка');
            }
        } finally {console.log(CurrentUserContext)}
    }, [navigate, userRegistrData])

    return (
        <section className='register'>
            <div className='register__container'>
                <Link to='/'><img className='header__image' src={mainLogo} alt='лого' /></Link>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form onSubmit={handleSubmit} className='register__form'>
                    <fieldset className='register__fieldset'>
                        <label className='register__fields'>
                            <p className='register__inputs'>Имя</p>
                            <input className={`register__input ${!isNameValid ? 'register__input--error' : ''}`}
                                type="text"
                                value={userRegistrData.name}
                                onChange={handleChange}
                                name='name'
                                placeholder="Введите имя"
                                minLength={2}
                                maxLength={30}

                            />
                            {!isNameValid && <span className="register__error">Некорректное имя</span>}
                        </label>
                        <label className='register__fields'>
                            <p className='register__inputs'>E-mail</p>
                            <input className={`register__input ${!isEmailValid ? 'register__input--error' : ''}`}
                                value={userRegistrData.email}
                                onChange={handleChange}
                                type='email'
                                name='email'
                                placeholder='Введите E-mail'
                            />
                            {!isEmailValid && <span className="register__error">Некорректный E-mail</span>}
                        </label>
                        <label className='register__fields'>
                            <p className='register__inputs'>Пароль</p>
                            <input className='register__input'
                                onChange={handleChange}
                                value={userRegistrData.password}
                                type='password'
                                name='password'
                                placeholder='Введите пароль'
                                required />
                        </label>
                    </fieldset>
                    {registrationError && <span className="register__error">{registrationError}</span>}
                    <div className='register__box'>
                        <button className={`register__button ${(!isEmailValid || !isNameValid) ? 'register__button-disabled' : ''}`} type="submit" disabled={!isEmailValid || !isNameValid}>
                            Зарегистрироваться
                        </button>
                        <div className='register__link'>
                            <p className="register__text">Уже зарегистрированы?</p>
                            <Link className="register__login" to="/signin">Войти</Link>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Register;