import React from 'react';
import Post from './Post/Post';
import style from './MyPost.module.css';



const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}></Post>);
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