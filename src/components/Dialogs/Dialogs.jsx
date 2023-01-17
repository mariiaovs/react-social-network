import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messagesData.map ( message => <Message message={message.message} />);

    let dialogsElements = props.dialogsPage.dialogsData.map ( dialog => <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} />);

    let newMessageElement = props.dialogsPage.newMessageText;
    
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;        
        props.updateNewMessageText(text);
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
                <textarea onChange={onMessageChange}
                          value={newMessageElement} />
                <button onClick = { addMessage }>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;