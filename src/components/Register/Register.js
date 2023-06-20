import React, { useCallback, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';


function Register({ onRegister }) {
    const [userRegistrData, setRegistrData] = useState({ name: '', email: '', password: '' });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setRegistrData({ ...userRegistrData, [name]: value })
    }, [userRegistrData])

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(userRegistrData)
    }

    return (
        <section className='register'>
            <div className='register__container'>
                <Link to='/'><img className='header__image' src={mainLogo} alt='лого' /></Link>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form onSubmit={handleSubmit} className='register__form'>
                    <fieldset className='register__fieldset'>
                        <label className='register__fields'>
                            <p className='register__inputs'>Имя</p>
                            <input className='register__input'
                                onChange={handleChange}
                                value={userRegistrData.name}
                                placeholder="Введите имя"
                                minLength={2}
                                maxLength={30}
                            />
                        </label>
                        <label className='register__fields'>
                            <p className='register__inputs'>E-mail</p>
                            <input className='register__input'
                                onChange={handleChange}
                                value={userRegistrData.email}
                                type='email'
                                name='email'
                                placeholder='Введите E-mail'
                                required />
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
                    <div className='register__box'>
                        <button className="register__button" type="submit">Зарегистрироваться</button>
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