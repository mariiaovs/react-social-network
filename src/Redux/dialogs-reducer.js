const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageText: 'Masha'
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    };

    switch (action.type) {
        case ADD_MESSAGE: {           
            let newMessage = state.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messagesData.push({ id: 7, message: newMessage });            
            return stateCopy;            
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })


export default dialogsReducer;