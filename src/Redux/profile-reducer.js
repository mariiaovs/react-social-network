import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    postsData: [
        { id: 1, message: 'It\'s my first post', likesCount: 1 },
        { id: 2, message: 'Hi, how are you?', likesCount: 5 },
        { id: 3, message: 'Yo!', likesCount: 8 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
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
        case DELETE_POST:
            return {
                ...state,
                postsData: [...state.postsData.filter(p => p.id !== action.postId)]
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) =>
    ({ type: SET_STATUS, status })

export const deletePost = (postId) =>
    ({ type: DELETE_POST, postId })


export const getProfile = (userId) => {
    return (dispatch) => {

        profileAPI.getProfile(userId)

            .then(response => {

                dispatch(setUserProfile(response.data));

            });
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {

        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));

    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {

        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }

    }
}

export default profileReducer;
