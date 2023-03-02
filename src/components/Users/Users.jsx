import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <h1>Users</h1>
        <div className={classes.usersContainer}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : ""}
                    onClick={(e) => { props.onPageChange(p); }}>{p}</span>
            })}
        </div>
        <div className={classes.usersContainer}>
            {
                props.users.map(u => <div key={u.id} className={classes.user}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                     { withCredentials: true,  headers: {"API-KEY": "50f9bff6-29c3-48be-afed-14c2bda4d794"} })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });                                   
                                    
                                    }}>Unfollow</button>

                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                     { withCredentials: true, headers: {"API-KEY": "50f9bff6-29c3-48be-afed-14c2bda4d794"} })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });

                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    </div>
}

export default Users;