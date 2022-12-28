import classes from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className={classes.friend}>
            <img src={props.img}></img>
            {props.name}
        </div>
    )
}

export default Friend;