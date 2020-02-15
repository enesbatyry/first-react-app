import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700_960_720.jpg'></img>
            {props.message}
        </div>
    )
}

export default Post;