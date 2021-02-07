import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Signin = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const {email, password} = user;

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <div className="form-usuario">
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