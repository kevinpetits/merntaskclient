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

        <div className="container-fluid">
          {alert ? (<div className="alert alert-danger text-center" >
            {alert.msg}
            </div>) : null}
          <div className="row justify-content-center">
            <div className="col-md-4 " style={{marginTop: "15%"}}>
              <div className="card" >
                <div className="card-header card-header-primary text-center">
                  <h3 className="card-title">Sign Up to Project Manager APP</h3>
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
                          <input type="text" className="form-control" name="name" placeholder="Your name here" value={name} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="password" name="password" id="password" className="form-control" placeholder="Your password here" value={password} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirm your password here" value={confirmPassword} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <Link to={'/'} className="btn btn-primary btn-link pull-left">Sign IN</Link>
                        <input type="submit" className="btn btn-primary pull-right" value="Sign UP" />
                    </div>
                    <div className="clearfix"></div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default Signup;