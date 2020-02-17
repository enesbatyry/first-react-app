const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

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

    dispatch(action){
      if (action.type === 'ADD-POST'){
          let post = {
              id: 5,
              message: this._state.profilePage.newPostText,
              likeCount: 0
          };
          this._state.profilePage.posts.push(post);
          this.rendererEntireTree(this._state);

      }else if (action.type === 'UPDATE-POST-TEXT'){
          this._state.profilePage.newPostText = action.newText;
          this.rendererEntireTree(this._state);
      }
    },

    subscribe(observer) {
        this.rendererEntireTree = observer;
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const updatePostTextActionCreator = (text) => ({type:UPDATE_POST_TEXT, newText: text})


export default store;
window.store = store;