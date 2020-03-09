import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../../Common/Preloader";
import ProfileStatus from './ProfileStatus'
const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <span>----------------------------------</span>
                <div>Обо мне: <span>{props.profile.aboutMe}</span></div>
                <div>В поисках работы?: <span>{props.profile.lookingForAJob? 'да':'нет'} </span></div>
                <div>Полное имя: <span>{props.profile.fullName} </span></div>
            </div>
        </div>
    );
}

export default ProfileInfo;