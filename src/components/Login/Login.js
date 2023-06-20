import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';


function Login({ onLogin }) {
    const [userLoginData, setLoginData] = useState({ email: '', password: '' });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setLoginData({ ...userLoginData, [name]: value })
    }, [userLoginData])

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(userLoginData)
    }
    return (
        <section className='register'>
            <div className='register__container'>
                <Link to='/'><img className='header__image' src={mainLogo} alt='лого' /></Link>
                <h2 className='register__title'>Рады видеть!</h2>
                <form onSubmit={handleSubmit} className='register__form'>
                    <fieldset className='register__fieldset'>
                        <label className='register__fields'>
                            <p className='register__inputs'>E-mail</p>
                            <input className='register__input'
                                onChange={handleChange}
                                value={userLoginData.email}
                                type='email'
                                name='email'
                                placeholder='Введите E-mail'
                                required />
                        </label>
                        <label className='register__fields'>
                            <p className='register__inputs'>Пароль</p>
                            <input className='register__input'
                                onChange={handleChange}
                                value={userLoginData.password}
                                type='password'
                                name='password'
                                placeholder='Введите пароль'
                                required />
                        </label>
                    </fieldset>
                    <div className='register__box'>

                        <button className="register__button" type="submit">Войти</button>
                        <div className='register__link'>
                            <p className="register__text">Ещё не зарегистрированы?</p>
                            <Link className="register__login" to="/signup">Регистрация</Link>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Login;