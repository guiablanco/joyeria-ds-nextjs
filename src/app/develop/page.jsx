'use client'

import { useEffect } from "react";

//styles
import '../../styles/login-register.css';

const Develop = () => {

    useEffect(() => {
        document.querySelector('.img__btn').addEventListener('click', function() {
            document.querySelector('.cont').classList.toggle('s--signup');
        });
    }, []);

    return (
        <div className="cont">
            <div className="form sign-in">
            <h2>Bienvenido nuevamente</h2>
            <label>
                <span>Email</span>
                <input type="email"></input>
            </label>
            <label>
                <span>Password</span>
                <input type="password"></input>
            </label>
            <p className="forgot-pass">
                ¿Olvidó su contraseña?
            </p>
            <button type="button" className="submit">
                Accede
            </button>
            <button type="button" className="fb-btn">
                Accede con <span>facebook</span>
            </button>
            </div>

            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h2>¿Eres nuevo?</h2>
                        <p>Regístrate y descubre las mejores oportunidades en joyería.</p>
                    </div>
                    <div className="img__text m--in">
                        <h2>¿Ya estás registrado?</h2>
                        <p>Si ya tienes una cuenta, solo inicia sesión.</p>
                    </div>
                    <div className="img__btn">
                        <span className="m--up">Regístrate</span>
                        <span className="m--in">Accede</span>
                    </div>
                </div>
                <div className="form sign-up">
                    <h2>Es tiempo de sentirte entre joyas...</h2>
                    <label>
                        <span>Nombre</span>
                        <input type="text"></input>
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email"></input>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password"></input>
                    </label>
                    <button type="button" className="submit">
                        Regístrate
                    </button>
                    <button type="button" className="fb-btn">
                        Ingresa con <span>facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Develop;
