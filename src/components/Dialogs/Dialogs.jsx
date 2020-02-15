import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";




const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.messages.map(m => <MessageItem message={m.message}/>);
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;