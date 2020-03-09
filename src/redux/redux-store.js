import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {navbarReducer} from "./NavBarReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./AppReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store =store
export default store;