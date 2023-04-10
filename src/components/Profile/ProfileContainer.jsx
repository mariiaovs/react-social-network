import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getStatus, setUserProfile, updateStatus } from '../../Redux/profile-reducer';
import Profile from './Profile';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from 'redux';

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {


  componentDidMount() {

    let userId = this.props.router.params.userId;

    if (!userId) {      
      userId = this.props.loggedInUserId;
    }
    if (!userId) {
      this.props.router.navigate('/login');
    }

    this.props.getProfile(userId);
    this.props.getStatus(userId);
    
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loggedInUserId: state.auth.id,
  isAuth: state.auth.isAuth
});


export default compose(
  connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus }),
  withRouter
  )(ProfileContainer);

