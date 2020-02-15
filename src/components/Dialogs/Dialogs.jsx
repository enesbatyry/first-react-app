import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
const MessageItem = (props) =>{
    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
}

const dialogs = [
    {id:1, name:'Dimych'},
    {id:2, name:'Andrey'},
    {id:3, name:'Sveta'},
    {id:4, name:'Sasha'}
]

const messaeges = [
    {id:1, message:'Hi'},
    {id:2, message:'My name is Enes'},
    {id:3, message:'Wow it is beautiful'},
    {id:4, message:'Come on!'}
]

let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
let messageElements = messaeges.map(m => <MessageItem message={m.message}/>);


const Dialogs = () => {
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