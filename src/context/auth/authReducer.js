import {SIGNUP_SUCCESS, SIGNUP_ERROR, GET_USER, SIGNIN_SUCCESS, SIGNIN_ERROR, LOGOUT} from '../../types';

const AuthReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                auth: true,
                message: null,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                auth: true,
                loading: false
            }
        case LOGOUT:
        case SIGNIN_ERROR:
        case SIGNUP_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                auth: null,
                message: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default AuthReducer;