import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";




const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}></MyPosts>
    </div>
}

export default Profile;