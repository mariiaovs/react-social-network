const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        state.postsData.push(newPost);
        state.newPostText = '';
        
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;       
    }

    return state;
}

export default profileReducer;
