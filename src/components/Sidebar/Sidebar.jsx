import StoreContext from '../../StoreContext';
import Friend from './Friend/Friend';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let friends = state.sidebar.friendsData.map(friend => <Friend img={friend.img} name={friend.name} />);

                    return (
                        <div className={classes.sidebar}>
                            <div>
                                {friends}
                            </div>
                        </div>
                    )
                }
            }
        </StoreContext.Consumer >
    )
}

export default Sidebar;