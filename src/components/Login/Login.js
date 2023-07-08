import React, { useCallback, useState, useContext } from 'react';
import { isEmail } from 'validator';
import { Link, useNavigate } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';
import { authorization } from '../../utils/auth';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Login() {
    const { loading, setLoading, setCurrentUser, setLoggedIn } = useContext(CurrentUserContext);
    const [userLoginData, setLoginData] = useState({ email: '', password: '' });
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [isChange, setChange] = useState(false);
    const [registrationError, setRegistrationError] = useState('');
    const isDisabled = !isEmailValid || !isValidPassword || !isChange || !userLoginData.email.length
    const navigate = useNavigate();

    const handleChange = useCallback((e) => {
        setChange(true);
        const { name, value } = e.target;
        setLoginData({ ...userLoginData, [name]: value })
        if (name === 'email') {
            const isValidEmail = isEmail(value);
            setIsEmailValid(isValidEmail);
        }
        if (name === 'password') {
            const isValidPassword = value.length > 2
            setIsValidPassword(isValidPassword)
        }
    }, [userLoginData])

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const data = await authorization(userLoginData)
            setChange(false);
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            setCurrentUser(userLoginData);
            setLoggedIn(true);
            navigate("/movies", { replace: true });
        } catch (error) {
            console.log(error)
            if (error.response && error.response.status === 400) {
                setRegistrationError('Вы ввели неправильный логин или пароль');
            } else if ('token' === undefined) {
                setRegistrationError('При авторизации произошла обшибка. Токен не передан или передан не в том формате');
            }
            else {
                setRegistrationError('При авторизации произошла ошибка, переданный токен не корректен');
            }
        } finally {
            setLoading(false);
        }
    }, [setCurrentUser, navigate, userLoginData])

    return (
        <section className='register'>
            <div className='register__container'>
                <Link to='/'><img className='header__image' src={mainLogo} alt='лого' /></Link>
                <h2 className='register__title'>Рады видеть!</h2>
                <form onSubmit={handleSubmit} className='register__form'>
                    <fieldset className='register__fieldset'>
                        <label className='register__fields'>
                            <p className='register__inputs'>E-mail</p>
                            <input className={`register__input ${!isEmailValid ? 'invalid' : ''}`}
                                onChange={handleChange}
                                value={userLoginData.email}
                                type='email'
                                name='email'
                                placeholder='Введите E-mail'
                                required />
                            {!isEmailValid && <span className="register__error">Некорректный E-mail</span>}
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
                        {registrationError && <span className="register__error">{registrationError}</span>}
                    </fieldset>
                    <div className='register__box'>

                        <button className={`register__button ${isDisabled ? 'register__button-disabled' : ''}`} type="submit" disabled={isDisabled || loading}>Войти</button>
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