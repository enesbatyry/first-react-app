import React from "react"
import {connect} from "react-redux";
import {logout} from "../../redux/AuthReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {logout})(HeaderContainer);