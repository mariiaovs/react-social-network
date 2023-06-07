import React from 'react';
import classes from './Users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

let Users = ({totalUsersCount, pageSize, currentPage, onPageChange, ...props}) => {   
    
    return <div>
        <h1>Users</h1>
        <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />        
        <div className={classes.usersContainer}>
            {
                props.users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow} follow={props.follow}
                    key={u.id} className={classes.user} /> )
            }
        </div>
    </div>
}

export default Users;