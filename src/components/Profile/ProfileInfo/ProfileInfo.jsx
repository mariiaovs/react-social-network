import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.bigImage}>
        <img src='https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img className={classes.avatar} src="https://www.rnd.de/resizer/txuyjSWeLwrLvpvoSrVsqimT3Og=/1441x1441/filters:quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/LS7TMAQ2JFCDVF3HVHNNCW7HDU.jpeg"></img>
        <div>description</div>
      </div>
    </div>
  )
}

export default ProfileInfo;