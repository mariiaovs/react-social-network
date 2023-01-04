const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {

    if (action.type === 'ADD-MESSAGE') {
        let newMessage = this._state.dialogsPage.newMessageText;
        state.messagesData.push({ id: 6, message: newMessage });
        state.newMessageText = '';        
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newText;        
    }

    return state;
}

export default dialogsReducer;