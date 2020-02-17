export let store = {
    rendererEntireTree() {
        console.log('state changed');
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 19},
                {id: 2, message: 'It\'s my first post"', likeCount: 23}
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'My name is Enes'},
                {id: 3, message: 'Wow it is beautiful'},
                {id: 4, message: 'Come on!'}
            ]
        },

    },

    getState() {
        return this._state;
    },
    addPost(postMessage) {
        let post = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText ='';
        this.rendererEntireTree(this._state);
    },

    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rendererEntireTree(this._state);
    },

    subscribe(observer) {
        this.rendererEntireTree = observer;
    }
}


export default store;