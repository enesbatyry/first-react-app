import React from "react"
import {
    follow, requestUsers,
    setCurrentPage,
    setFollowingInProgress,
    unFollow
} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../Common/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selector";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; ++i) {
            pages.push(i);
        }
        return <>
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Users
                        usersPage={pages}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        setFollowingInProgress={this.props.setFollowingInProgress}
                        followingInProgress={this.props.followingInProgress}
                    />
                }
            </div>
        </>

    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}*/
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default compose( connect(mapStateToProps,
    {follow, unFollow, setCurrentPage, setFollowingInProgress, requestUsers}), withAuthRedirect)(UsersContainer)
