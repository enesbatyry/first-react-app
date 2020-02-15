import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
        <div>
            My posts
        </div>
        <Post message='Hi, how are you?'></Post>
        <Post message="It's my first post"></Post>
    </div>
}

export default MyPosts;