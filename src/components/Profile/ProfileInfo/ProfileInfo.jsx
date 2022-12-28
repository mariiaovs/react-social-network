import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img className={classes.avatar} src="https://www.rnd.de/resizer/txuyjSWeLwrLvpvoSrVsqimT3Og=/1441x1441/filters:quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/LS7TMAQ2JFCDVF3HVHNNCW7HDU.jpeg"></img>
        <div>description</div>
      </div>
    </div>
  )
}

export default ProfileInfo;