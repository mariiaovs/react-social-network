import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, toggleFollowingInProgress, unfollow } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';



class UsersContainer extends React.Component {

    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        /* this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)

            .then(data => {

                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }); */
    }

    onPageChange = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);

        /*         
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)

            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            }); */
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers
})(UsersContainer);

