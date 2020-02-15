import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:1, message: 'Hi, how are you?', likeCount:19},
    {id:2, message: 'It\'s my first post"', likeCount: 23}
]


const dialogs = [
    {id:1, name:'Dimych'},
    {id:2, name:'Andrey'},
    {id:3, name:'Sveta'},
    {id:4, name:'Sasha'}
]

const messages = [
    {id:1, message:'Hi'},
    {id:2, message:'My name is Enes'},
    {id:3, message:'Wow it is beautiful'},
    {id:4, message:'Come on!'}
]


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
