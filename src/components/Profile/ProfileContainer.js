import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, setUserProfile, updateUserStatus} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import * as axios from 'axios'
import {Redirect, withRouter} from "react-router-dom";
import {getAuthUserData} from "../../redux/AuthReducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authUserId;
            if (!userId){
                this.props.history.push("/login");
            }
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    render() {
        return <Profile {...this.props} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile,
        authUserId: state.auth.id,
        status: state.profilePage.status
    }
}

export default compose(connect(mapStateToProps,{getUserProfile,getUserStatus, updateUserStatus}),withRouter,withAuthRedirect)(ProfileContainer)