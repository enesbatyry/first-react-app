import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";




const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={props.addPost} updatePostText={props.updatePostText}></MyPosts>
    </div>
}

export default Profile;