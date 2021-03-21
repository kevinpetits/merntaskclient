import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Signup = (props) => {

    //Extracting values from context
    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {message, auth, signUp} = authContext;

    //If user is authenticated or registered or a duplicated user
    useEffect(() => {
        if(auth){
            props.history.push('/projects')
        }
        if(message){
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    }, [message, auth, props.history])

    // State para registrarse
    const [user, setUser] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    });
    // extraer de usuario
    const {email, name, password, confirmPassword} = user;
    // obtiene la informacion de los campos
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }
    // Cuando el usuario quiere registrarse
    const handleSubmit = (event) => {
        event.preventDefault();

        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''){
            showAlert('All fields are required', 'alerta-error');
            return;
        }

        if(password.length < 6) {
            showAlert('Password must have at least 6 characters', 'alerta-error');
            return;
        }

        if(password !== confirmPassword){
            showAlert('Password fields do not match', 'alerta-error');
            return;
        }

        signUp({
            name,
            email,
            password
        });
    }

    return ( 
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Crear cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Ingresa tu email" value={email} onChange={handleChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" value={name} onChange={handleChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={password} onChange={handleChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmPassword">Confirmar contraseña</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Ingresa tu contraseña" value={confirmPassword} onChange={handleChange} />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Iniciar sesión</Link>
            </div>
        </div>
     );
}
 
export default Signup;