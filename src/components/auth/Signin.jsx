import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Signin = (props) => {

    //Extracting values from context
    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {message, auth, signIn} = authContext;

    useEffect(() => {
        if(auth){
            props.history.push('/projects')
        }
        if(message){
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    }, [message, auth, props.history])

    // State para iniciar sesión
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    // extraer de usuario
    const {email, password} = user;
    // obtiene la informacion de los campos
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }
    // Cuando el usuario quiere iniciar sesión
    const handleSubmit = (event) => {
        event.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            showAlert('All fields are required', 'alerta-error');
            return;
        }

        signIn({email, password});
    }
    return ( 
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Ingresa tu email" value={email} onChange={handleChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Ingresa tu password" value={password} onChange={handleChange} />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión" />
                    </div>
                </form>
                <Link to={'/signup'} className="enlace-cuenta"> Crear cuenta</Link>
            </div>
        </div>
     );
}
 
export default Signin;