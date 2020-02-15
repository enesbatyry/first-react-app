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

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Vitya' id='5'/>
            </div>
            <div className={style.messages}>
               <MessageItem message={'Hi'}/>
               <MessageItem message={'My name is Enes'}/>
               <MessageItem message={'Wow it is beautiful'}/>
               <MessageItem message={'Come on!'}/>

            </div>
        </div>
    );
}

export default Dialogs;