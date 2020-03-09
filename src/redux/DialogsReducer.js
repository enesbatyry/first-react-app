import {store} from "./state";


const SEND_MESSAGE_TEXT = 'SEND_MESSAGE_TEXT'

let initialState = {
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
        ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_TEXT: {
            return {
                ...state,
                messages: [...state.messages,{id: 6, message: action.message}],
            };
        }
        default: return state
    }
}

export const sendMessage = (message) => ({type: SEND_MESSAGE_TEXT, message})
