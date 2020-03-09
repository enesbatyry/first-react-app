import React from "react";
import style from "./users.module.css";
import urlPhoto from "../../assets/avatar.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followApi, subscribeApi, userApi} from "../../API/Api";
import {setFollowingInProgress} from "../../redux/UsersReducer";

let Users = (props) => {
    return <div className={style.main}>
        <div>
            {props.usersPage.map(
                p => <ul>
                    <li className={props.currentPage === p && style.selected}
                        onClick={(e) => props.onPageChanged(p)}>{p}</li>
                </ul>)
            }
        </div>
        {
            props.users.map(
                u => <div>
                    <NavLink to={'/profile/' + u.id}>
                        <div className={style.ava}>
                            <img src={u.photos.small === null ? urlPhoto : u.photos.small} alt='avatar'/>
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{"u.country"}</div>
                            <div>{"u.city"}</div>
                        </div>
                    </NavLink>
                    <div>
                        {
                            u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                        }
                                     }>unfollow
                                </button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unFollow(u.id)
                                         }
                                    }>follow
                                </button>
                        }
                    </div>

                </div>
            )
        }
    </div>
}

export default Users