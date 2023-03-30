import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const MyPostForm = (props) => {
  return <form form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"Your post"} name={"newPost"} component={Textarea}
             validate={ [required, maxLengthCreator(10)] } />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}


const MyPostReduxForm = reduxForm({ form: 'ProfileNewPost' }) (MyPostForm);


const MyPosts = (props) => {

  let postsElements = props.profilePage.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  const addNewPost = (values) => {   
    props.addPost(values.newPost);
}

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <MyPostReduxForm onSubmit={addNewPost} />      
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}


export default MyPosts;