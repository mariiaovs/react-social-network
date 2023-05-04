import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus.jsx'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }


  return (
    <div>
      {/* <div className={classes.bigImage}>
        <img src='https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'></img>
      </div> */}
      <div className={classes.descriptionBlock}>
        <img className={classes.avatar} src={props.profile.photos.large}></img>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
        <div>
          { props.profile.lookingForAJob ? <div>I'm looking for a job: {props.profile.lookingForAJobDescription}</div> : <div></div> }
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;