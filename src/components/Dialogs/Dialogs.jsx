import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/state';

const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messagesData.map ( message => <Message message={message.message} />);

    let dialogsElements = props.dialogsPage.dialogsData.map ( dialog => <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} />);

    let newMessageElement = React.createRef();
    
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;        
        props.dispatch(updateNewMessageActionCreator(text));
    }  
  
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }                
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
            <div className={classes.textarea}>
                <textarea ref={ newMessageElement }
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText} />
                <button onClick = { addMessage }>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;