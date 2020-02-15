import React from 'react';
import Post from './Post/Post';
import style from './MyPost.module.css';


let posts = [
    {id:1, message: 'Hi, how are you?', likeCount:19},
    {id:2, message: 'It\'s my first post"', likeCount: 23}
]

let postElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount}></Post>);

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
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;