import React from 'react';
import { connect } from 'react-redux';
import { getProfile, setUserProfile } from '../../Redux/profile-reducer';
import Profile from './Profile';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
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
      userId = 2;
    }

    this.props.getProfile(userId);

    /* profileAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data);
      });  */
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile  
});


export default compose(
  connect(mapStateToProps, { setUserProfile, getProfile }),
  withAuthRedirect,
  withRouter
  )(ProfileContainer);

