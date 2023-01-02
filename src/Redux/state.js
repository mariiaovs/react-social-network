const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Alex', img: 'https://www.adobe.com/de/express/feature/image/media_1c3bbd97ac64c130e7b7689aa468bd4c8304a2121.png?width=750&format=png&optimize=medium' },
                { id: 2, name: 'Oleg', img: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg' },
                { id: 3, name: 'Katja', img: 'https://iris-fotografie.de/wp-content/uploads/2021/02/Iris-Foto-blau-gelb-1-1024x1024.jpg' },
                { id: 4, name: 'Ivan', img: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg' },
                { id: 5, name: 'Larisa', img: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg' },
                { id: 6, name: 'Dima', img: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg' }
            ],
            messagesData: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "I'm fine. And you?" },
                { id: 4, message: "Great!" },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' }
            ],
            newMessageText: ''
        },
        profilePage: {
            postsData: [
                { id: 1, message: 'It\'s my first post', likesCount: 1 },
                { id: 2, message: 'Hi, how are you?', likesCount: 5 },
                { id: 3, message: 'Yo!', likesCount: 8 }
            ],
            newPostText: ''
        },
        sideBar: {
            friendsData: [
                { id: 1, name: 'Alex', img: 'https://www.adobe.com/de/express/feature/image/media_1c3bbd97ac64c130e7b7689aa468bd4c8304a2121.png?width=750&format=png&optimize=medium' },
                { id: 2, name: 'Oleg', img: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg' },
                { id: 3, name: 'Katja', img: 'https://iris-fotografie.de/wp-content/uploads/2021/02/Iris-Foto-blau-gelb-1-1024x1024.jpg' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.messagesData.push({id: 6, message: newMessage});
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;
window.store = store;