import {dialogsReducer} from "./DialogsReducer";
import {navbarReducer} from "./NavBarReducer";
import {profileReducer} from "./ProfileReducer";

export let store = {
    rendererEntireTree() {
        console.log('state changed');
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 19},
                {id: 2, message: 'It\'s my first post"', likeCount: 23}
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'My name is Enes'},
                {id: 3, message: 'Wow it is beautiful'},
                {id: 4, message: 'Come on!'}
            ],
            newMessageText: ''
        },

    },

    getState() {
        return this._state;
    },

    dispatch(action){
        this._state =  dialogsReducer(this._state, action);
        this._state =  profileReducer(this._state, action);
        this._state =  navbarReducer(this._state, action);
    },

    subscribe(observer) {
        this.rendererEntireTree = observer;
    }
}



export default store;
window.store = store;