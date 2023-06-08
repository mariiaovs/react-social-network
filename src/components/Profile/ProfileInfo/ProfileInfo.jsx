import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/user.png';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large != null ? profile.photos.large : userPhoto} className={classes.avatar} alt="Avatar" />
        <div>{profile.fullName}</div>
        <div>{profile.aboutMe}</div>
        <div>
          {profile.lookingForAJob ? <div>I'm looking for a job: {profile.lookingForAJobDescription}</div> : <div></div>}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;