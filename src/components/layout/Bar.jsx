import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext';

const Bar = () => {

    //Extracting auth info
    const authContext = useContext(AuthContext);
    const {user, getAuthenticatedUser, logOut} = authContext;

    useEffect(() => {
        getAuthenticatedUser();
        // eslint-disable-next-line
    }, []);

    return ( 
        <header className="app-header">
            {user ? <p className="nombre-usuario">Hola <span>{user.name}</span></p> : null}
            <nav className="nav-principal">
                <button className="btn btn-blank cerrar-sesion" onClick={() => logOut()}>Cerrar sesión</button>
            </nav>
        </header>
     );
}
 
export default Bar;