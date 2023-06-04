import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/api";

const SET_USER_DATA = 'masha-network/auth/SET_USER_DATA';


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


export const authorise = () => async (dispatch) => {
    let response = await headerAPI.authorise();

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }

}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await headerAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(authorise());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }))
    }

}

export const logout = () => async (dispatch) => {
    let response = await headerAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { id, login, email, isAuth } })

export default authReducer;