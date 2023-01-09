import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageActionCreator(text);        
        props.store.dispatch(action);
    }  
  
    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 addMessage={addMessage}
                 messagesData={state.messagesData}
                 dialogsData={state.dialogsData}
                 newMessageText={state.newMessageText} />)
}

export default DialogsContainer;