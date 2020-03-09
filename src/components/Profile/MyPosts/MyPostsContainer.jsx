import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            return dispatch(addPostActionCreator(message));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;