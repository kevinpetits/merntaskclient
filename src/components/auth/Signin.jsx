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
        <div className="container-fluid">
          {alert ? (<div className="alert alert-danger text-center">
            {alert.msg}
            </div>) : null}
          <div className="row justify-content-center">
            <div className="col-md-4 " style={{marginTop: "15%"}}>
              <div className="card" >
                <div className="card-header card-header-primary text-center">
                  <h3 className="card-title">Sign In to Project Manager APP</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="email" name="email" id="email" className="form-control" placeholder="Your email here" value={email} onChange={handleChange}  />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="password" name="password" id="password" className="form-control" placeholder="Your password here" value={password} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <Link to={'/signup'} className="btn btn-primary btn-link pull-left"> Sign UP</Link>
                        <input type="submit" className="btn btn-primary pull-right" value="Sign IN" />
                    </div>
                    {/* <button type="submit" className="btn btn-primary pull-right">Update Profile</button> */}
                    <div className="clearfix"></div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default Signin;