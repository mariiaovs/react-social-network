import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, toggleFollowingInProgress, unfollow } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getAllUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuperSelector } from '../../Redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChange = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, pageSize);
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

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
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

