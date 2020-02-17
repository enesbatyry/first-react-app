let rendererEntireTree = () =>{
    console.log('state changed');
}


let state = {
    profilePage:{
        posts : [
            {id:1, message: 'Hi, how are you?', likeCount:19},
            {id:2, message: 'It\'s my first post"', likeCount: 23}
        ],
        newPostText: ''
    },
    dialogsPage:{
        dialogs : [
            {id:1, name:'Dimych'},
            {id:2, name:'Andrey'},
            {id:3, name:'Sveta'},
            {id:4, name:'Sasha'}
        ],
        messages : [
            {id:1, message:'Hi'},
            {id:2, message:'My name is Enes'},
            {id:3, message:'Wow it is beautiful'},
            {id:4, message:'Come on!'}
        ]
    }
}


export const addPost = (postMessage) =>{
    let post = {id:5, message:postMessage, likeCount: 0};
    state.profilePage.posts.push(post);
    rendererEntireTree(state);
}

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rendererEntireTree(state);
}

export const subscribe = (observer) => {
    rendererEntireTree = observer;
}

export default state;