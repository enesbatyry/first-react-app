import store from "./redux-store";
import {profileApi, userApi} from "../API/Api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 19},
        {id: 2, message: 'It\'s my first post"', likeCount: 23}
    ],
    profile: null,
    status: ""
}


export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: 5,
                message: action.message,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: {...action.profile}
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (message) => ({type: ADD_POST, message})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    userApi.getUserProfile(userId)
        .then((data) => {
            dispatch(setUserProfile(data))
        })
}

export const getUserStatus = (userId) => (dispatch) => {
    profileApi.getUserStatus(userId)
        .then((data) => {
             dispatch(setUserStatus(data))
        })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileApi.updateUserStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}


