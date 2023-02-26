import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile/" className={navData => navData.isActive ? classes.active : ""}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs/*" className={navData => navData.isActive ? classes.active : ""}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={navData => navData.isActive ? classes.active : ""}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" className={navData => navData.isActive ? classes.active : ""}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" className={navData => navData.isActive ? classes.active : ""}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/friends" className={navData => navData.isActive ? classes.active : ""}>Friends</NavLink>
      </div>      
    </nav>
  )
}

export default Navbar;