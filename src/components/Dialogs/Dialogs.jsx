import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const DialogForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Your message"} name={"newDialogMessage"} component={"textarea"} />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}

const DialogReduxForm = reduxForm({ form: 'dialogMessage' })(DialogForm);

const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message} />);

    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} />);

    let newMessageElement = props.dialogsPage.newMessageText;

    const addNewMessage = (values) => {
        props.addMessage(values.newDialogMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.textarea}>
                <DialogReduxForm onSubmit={addNewMessage} />                
            </div>
        </div>
    )
}

export default Dialogs;