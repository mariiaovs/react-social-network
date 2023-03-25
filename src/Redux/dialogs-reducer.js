const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newDialogMessage;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 7, message: newMessage }]
            };        
        default:
            return state;
    }
}

export const addMessageActionCreator = (newDialogMessage) => ({ type: ADD_MESSAGE, newDialogMessage })


export default dialogsReducer;