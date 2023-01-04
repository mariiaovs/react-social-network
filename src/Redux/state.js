import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;