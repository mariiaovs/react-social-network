import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';


const MyPostForm = (props) => {
  return <form form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"My post"} name={"myPost"} component={"textarea"} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}


const MyPostReduxForm = reduxForm({ form: 'myPost' }) (MyPostForm);


const MyPosts = (props) => {

  let postsElements = props.profilePage.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  const onSubmit = (formData) => {
    console.log(formData);
}

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <MyPostReduxForm onSubmit={onSubmit} />
      {/* <div>
        <div>
          <textarea onChange={onPostChange}
            ref={newPostElement}
            value={props.profilePage.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div> */}
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}


export default MyPosts;