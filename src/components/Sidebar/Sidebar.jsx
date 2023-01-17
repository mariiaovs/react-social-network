import Friend from './Friend/Friend';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {

    let friends = props.sidebar.friendsData.map(friend => <Friend img={friend.img} name={friend.name} />);

    return (
        <div className={classes.sidebar}>
            <div>
                {friends}
            </div>
        </div>
    )
}

export default Sidebar;