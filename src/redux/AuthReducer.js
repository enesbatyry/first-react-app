import {authApi, userApi} from "../API/Api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, login, email, isAuth}})
export const getAuthUserData = () =>{
    return (me())
}

export const me = () => (dispatch) =>{
    authApi.me('auth/me')
        .then((data) => {
            if (data.resultCode === 0){
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        })

}

export const login = (email, password, rememberMe) => (dispatch) =>{

    authApi.login(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode===0){
                dispatch(me())
            }else{
                let message = data.messages.length > 0 ? data.messages[0] : "Some error!";
                dispatch(stopSubmit("login", {_error: message}));
            }
        })

}

export const logout = () => (dispatch) =>{
    authApi.logout()
        .then((data) => {
            if (data.resultCode === 0){
                dispatch(setAuthUserData(null,null,null,false));
            }
        })

}