import React from 'react';
import Post from './Post/Post';
import style from './MyPost.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validator";

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <h2>My posts</h2>
            <div>
                <Field name={'postMessage'} component={Textarea} validate={[required, maxLength10]}></Field>
            </div>
            <button>add post</button>
        </div>
    </form>
}

const MyPosts = (props) => {
    let postElements = props.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likeCount}></Post>);

    let addPost = (values) => {
        props.addPost(values.postMessage);
    }

    let MyPostFormRedux = reduxForm({form:'MyPostForm'})(MyPostForm)

    return (
        <div className={style.postBlock}>
           <MyPostFormRedux onSubmit={addPost}/>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;