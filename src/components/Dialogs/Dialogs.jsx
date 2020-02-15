import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Dimych
                </div>
                <div className={style.dialog}>
                    Andrey
                </div>
                <div className={style.dialog}>
                    Sveta
                </div>
                <div className={style.dialog}>
                    Sasha
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    Hi!
                </div>
                <div className={style.message}>
                    How are yuo?
                </div>
                <div className={style.message}>
                    Yo
                </div>
            </div>
        </div>
    );
}

export default Dialogs;