import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authorise, setAuthUserData } from '../../Redux/auth-reducer';
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.authorise();
        
        /* //this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                //this.props.toggleIsFetching(false);                
            }); */
    }

    render() {

        return (
            <Header {...this.props} />
        )

    }


}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect(mapStateToProps, { setAuthUserData, authorise })(HeaderContainer);

