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
        // <header className="app-header">
        //     {user ? <p className="nombre-usuario">Hola <span>{user.name}</span></p> : null}
        //     <nav className="nav-principal">
        //         <button className="btn btn-blank cerrar-sesion" onClick={() => logOut()}>Cerrar sesión</button>
        //     </nav>
        // </header>
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              {user ? <p className="navbar-brand">Hello, <span>{user.name}</span></p> : null}
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                 <li className="nav-item dropdown">
                  <button className="btn btn-primary btn-link" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => logOut()}>
                    Logout<i className="material-icons">person</i>
                    <p className="d-lg-none d-md-block">
                      Account
                    </p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     );
}
 
export default Bar;