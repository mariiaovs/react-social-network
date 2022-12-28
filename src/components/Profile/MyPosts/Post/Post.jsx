import classes from './Post.module.css';


const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://cdn-icons-png.flaticon.com/512/147/147142.png'></img>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>

  )
}

export default Post;