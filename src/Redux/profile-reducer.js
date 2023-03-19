import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    postsData: [
        { id: 1, message: 'It\'s my first post', likesCount: 1 },
        { id: 2, message: 'Hi, how are you?', likesCount: 5 },
        { id: 3, message: 'Yo!', likesCount: 8 }
    ],
    newPostText: 'Masha',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) =>
    ({ type: SET_STATUS, status })


export const getProfile = (userId) => {
    return (dispatch) => {

        profileAPI.getProfile(userId)

            .then(response => {

                dispatch(setUserProfile(response.data));

            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {

        profileAPI.getStatus(userId)

            .then(response => {
                
                dispatch(setStatus(response.data));

            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {

        profileAPI.updateStatus(status)

            .then(response => { 
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;
