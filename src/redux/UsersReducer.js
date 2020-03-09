import {userApi} from "../API/Api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS ='SET_USERS'
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'
const SET_TOTAL_COUNT ='SET_TOTAL_COUNT'
const SET_FETCHING ='SET_FETCHING'
const SET_FOLLOWING_IN_PROGRESS ='SET_FOLLOWING_IN_PROGRESS'


const initialState = {
    users:[],
    pageSize:10,
    currentPage:1,
    totalUsersCount:150,
    isFetching: false,
    followingInProgress:[]
}


export const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed:false}
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed:true}
                    return u;
                })
            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_COUNT:{
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case SET_FETCHING:{
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_FOLLOWING_IN_PROGRESS:{
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !=action.userId)
            }
        }
        default: return state;

    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type:UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type:SET_CURRENT_PAGE, pageNumber})
export const setTotalCount = (count) => ({type:SET_TOTAL_COUNT, count})
export const setFetching = (isFetching) => ({type:SET_FETCHING, isFetching})
export const setFollowingInProgress = (isFetching, userId) => ({type:SET_FOLLOWING_IN_PROGRESS, isFetching, userId})

export const follow = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    userApi.unFollowUser(userId)
        .then((data) => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(setFollowingInProgress(false, userId));
        })
}

export const unFollow = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    userApi.followUser(userId)
        .then((data) => {
            if (data.resultCode == 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(setFollowingInProgress(false, userId));
        })
}
export const requestUsers = (pageNumber, pageSize) => (dispatch) => {
    dispatch(setFetching(true))
    dispatch(setCurrentPage(pageNumber));
    userApi.requestUsers(pageNumber, pageSize)
        .then((data) => {
            dispatch(setUsers(data.items));
            dispatch(setFetching(false))
            //this.props.setTotalCount(response.data.totalCount)
        });
}