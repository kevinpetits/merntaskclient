import React, {useReducer} from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import {SIGNUP_SUCCESS, SIGNUP_ERROR, GET_USER, SIGNIN_SUCCESS, SIGNIN_ERROR, LOGOUT} from '../../types';
import clientAxios from '../../config/axios';
import authToken from '../../config/authToken';

const AuthState = props => {

    const initialState = {
       token: localStorage.getItem('token'),
       auth: null,
       user: null,
       message: null,
       loading: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const signUp = async data => {
        try {
            const response = await clientAxios.post('/api/users', data);

            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data
            })

            //get User
            getAuthenticatedUser();
        } catch (error) {
            // console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: SIGNUP_ERROR,
                payload: alert
            })
        }
    }

    const getAuthenticatedUser = async () => {
        const token = localStorage.getItem('token');
        if(token){
            authToken(token);
        }
        try {
            const response = await clientAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: SIGNIN_ERROR
            })
        }
    }

    const signIn = async data => {
        try {
            const response = await clientAxios.post('/api/auth', data);
            dispatch({
                type: SIGNIN_SUCCESS,
                payload: response.data
            });
            getAuthenticatedUser();
        } catch (error) {
            console.log(error.response)
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: SIGNIN_ERROR,
                payload: alert
            })
        }
    }

    const logOut = () => {
        dispatch({
            type: LOGOUT
        })
    }


    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            auth: state.auth,
            user: state.user,
            message: state.message,
            loading: state.loading,
            signUp,
            signIn,
            getAuthenticatedUser,
            logOut
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;