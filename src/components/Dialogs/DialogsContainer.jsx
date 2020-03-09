import React from 'react';
import {sendMessage} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {sendMessage}),withAuthRedirect)(Dialogs);
