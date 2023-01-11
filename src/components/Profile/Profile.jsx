import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;