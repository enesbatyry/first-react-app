import React from 'react';
import Post from './Post/Post';
import style from './MyPost.module.css';


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}></Post>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updatePostText('');
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updatePostText(newText);
    }

    return (
        <div className={style.postBlock}>
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange}></textarea>
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