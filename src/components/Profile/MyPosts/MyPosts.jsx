import React from 'react';
import Post from './Post/Post';
import style from './MyPost.module.css';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}></Post>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(newText));
    }

    return (
        <div className={style.postBlock}>
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.posts.newPostText}></textarea>
                </div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;