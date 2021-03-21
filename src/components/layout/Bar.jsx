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
              <a className="navbar-brand" href="#!">Dashboard</a>
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
                  <a className="nav-link" href="#!" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Logout<i className="material-icons">person</i>
                    <p className="d-lg-none d-md-block">
                      Account
                    </p>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Settings</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Log out</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     );
}
 
export default Bar;