import { headerAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
    //isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const authorise = () => {
    return (dispatch) => {
        headerAPI.authorise()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                debugger;
                dispatch(setAuthUserData(id, login, email, true));                
            }

        });
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {    
        headerAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {                
                dispatch(authorise());
            }
        });    
}

export const logout = () => (dispatch) => {    
    headerAPI.logout()
    .then(response => {
        if (response.data.resultCode === 0) {                
            dispatch(setAuthUserData(null, null, null, false));
        }
    });    
}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { id, login, email, isAuth } })

export default authReducer;