import React from 'react';
import Post from './Post/Post';
import style from './MyPost.module.css';

const MyPosts = () => {
    return (
        <div className={style.postBlock}>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                </div>
                <button>add post</button>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?'></Post>
                <Post message="It's my first post"></Post>
            </div>
        </div>
    );
}

export default MyPosts;