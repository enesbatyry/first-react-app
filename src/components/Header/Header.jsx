import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
        <img src='https://img.favpng.com/9/25/22/logo-graphic-design-interior-design-services-art-png-favpng-S9Kunp9En6GnvGwjHeQhq27LM.jpg'></img>
        <div className={style.loginBlock}>
            {props.isAuth ? <div>{props.login} <button onClick={props.logout}>logout</button></div> : <NavLink to='/login'>login</NavLink>}
        </div>
    </header>
}

export default Header;