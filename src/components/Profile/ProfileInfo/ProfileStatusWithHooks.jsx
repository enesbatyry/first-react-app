import React, {useState} from 'react';

const ProfileStatusWithHooks =(props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateMode = () => {
        setEditMode(true)
    }

    const deActivateMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onChangeStatus = (e) =>{
        setStatus(e.currentTarget.value);
    }
        return (
            <span>
                {!editMode ?
                    <div>
                        <span onDoubleClick={activateMode}>{props.status || '--------'}</span>
                    </div>
                    :
                    <div>
                    <span><input onChange={onChangeStatus} onBlur={deActivateMode} autoFocus={true}
                                 value={status}/></span>
                    </div>
                }
            </span>

        );
}

export default ProfileStatusWithHooks;