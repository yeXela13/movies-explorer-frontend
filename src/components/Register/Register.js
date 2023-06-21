import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'
import { Link } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';




function Register({ onRegister }) {
    const [userRegistrData, setRegistrData] = useState({ name: '', email: '', password: '' });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setRegistrData({ ...userRegistrData, [name]: value })
    }, [userRegistrData])

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(userRegistrData)
    }
    const { register, handleSubmit: handleFormSubmit, formState: { errors } } = useForm();

    const handleValidation = () => {
        setIsFormValid(Object.keys(errors).length === 0);
    };


    return (
        <section className='register'>
            <div className='register__container'>
                <Link to='/'><img className='header__image' src={mainLogo} alt='лого' /></Link>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form onSubmit={handleFormSubmit(handleSubmit)} className='register__form'>
                    <fieldset className='register__fieldset'>
                        <label className='register__fields'>
                            <p className='register__inputs'>Имя</p>
                            <input className='register__input'
                                onChange={(e) => {
                                    handleChange(e);
                                    handleValidation();
                                }}
                                value={userRegistrData.name}
                                placeholder="Введите имя"
                                minLength={2}
                                maxLength={30}
                                {...register('name', {
                                    required: true,
                                    pattern: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
                                })}
                            />
                            {errors.name && <span className="register__span">Некорректное имя</span>}
                        </label>
                        <label className='register__fields'>
                            <p className='register__inputs'>E-mail</p>
                            <input className='register__input'
                                onChange={(e) => {
                                    handleChange(e);
                                    handleValidation();
                                }}
                                value={userRegistrData.email}
                                type='email'
                                name='email'
                                placeholder='Введите E-mail'
                                {...register('email', {
                                    required: true,
                                    pattern: /^\S+@\S+$/i,
                                })}
                            />
                            {errors.email && <span className="register__span">Некорректный адрес электронной почты</span>}
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
                    <button className={`register__button ${!isFormValid ? 'register__button-disabled' : ''}`} type="submit" disabled={!isFormValid}>Зарегистрироваться</button>
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