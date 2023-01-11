import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage;

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let onMessageChange = (text) => {
                        let action = updateNewMessageActionCreator(text);
                        store.dispatch(action);
                    }

                    return (
                        <Dialogs updateNewMessageText={onMessageChange}
                            addMessage={addMessage}
                            messagesData={state.messagesData}
                            dialogsData={state.dialogsData}
                            newMessageText={state.newMessageText} />)
                }
            }
        </StoreContext.Consumer >

    )
}

export default DialogsContainer;