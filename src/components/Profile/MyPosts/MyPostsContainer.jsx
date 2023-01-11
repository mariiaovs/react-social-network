import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }

          let onPostChange = (text) => {
            let action = updateNewPostActionCreator(text);
            store.dispatch(action);
          }
          return <MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText} />
        }
      }
    </StoreContext.Consumer >
  )
}

export default MyPostsContainer;