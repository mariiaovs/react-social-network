import React from 'react';
import classes from './Users.module.css';


let Users = (props) => {
debugger;
    if (props.users.length === 0) {
    props.setUsers([
        { id: 1, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: true, fullName: 'Alex', status: "Hello!", location: { city: 'Moscow', country: 'Russia' } },
        { id: 2, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: true, fullName: 'Theo', status: "Cool!", location: { city: 'Dresden', country: 'Germany' } },
        { id: 3, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: false, fullName: 'Katja', status: "I'm a superstar", location: { city: 'Stavropol', country: 'Russia' } },
        { id: 4, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: true, fullName: 'Ivan', status: "Hi!", location: { city: 'Moscow', country: 'Russia' } },
        { id: 5, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: false, fullName: 'Larisa', status: "Yo!", location: { city: 'Paris', country: 'France' } }
    ]);
}

    return (
        <div>
            <h1>Users</h1>
            {
                props.users.map(u => <div key={u.id} className={classes.user}>
                    <span>
                        <div>
                            <img src={u.photo} className={classes.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>)
}

export default Users;