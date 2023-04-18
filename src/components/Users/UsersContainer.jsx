import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, toggleFollowingInProgress, unfollow } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getAllUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../Redux/users-selectors';



class UsersContainer extends React.Component {

    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
    }

    onPageChange = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);    
        
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                onPageChange={this.onPageChange}
                unfollow={this.props.unfollow}
                follow={this.props.follow} />
        </>
    }
}


/* let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
} */

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers
})(UsersContainer);

