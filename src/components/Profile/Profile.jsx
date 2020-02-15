import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
        <img className={style.profile_img} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
        <div>ava + description</div>
        <MyPosts></MyPosts>
    </div>
}

export default Profile;