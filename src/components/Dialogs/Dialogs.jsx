import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {Textarea} from "../../Common/FormControls/FormControls";

const maxLength50 = maxLengthCreator(50);

const DialogAddMessageForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="messageBody" placeholder={'type your message'} component={Textarea} validate={[required, maxLength50]}></Field>
            </div>
            <button>Add</button>
        </form>
    )
}

const DialogAddMessageFormRedux = reduxForm({form:'DialogAddMessageForm'})(DialogAddMessageForm)

const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage;
    let dialogElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = dialogsPage.messages.map(m => <MessageItem message={m.message}/>);

    let onSendMessage = (values) => {
        props.sendMessage(values.messageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <DialogAddMessageFormRedux onSubmit={onSendMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;