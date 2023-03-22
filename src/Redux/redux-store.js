import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-reducer';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';
import { reducer as formReducer } from 'redux-form';

let store = configureStore(
    {
        reducer: {
            profilePage: profileReducer,
            dialogsPage: dialogsReducer,
            usersPage: usersReducer,
            sidebar: sidebarReducer,
            auth: authReducer,
            form: formReducer
        }
    }
);

/* let store = configureStore(
    {
        reducer: {
            profilePage: profileReducer,
            dialogsPage: dialogsReducer,
            usersPage: usersReducer,
            sidebar: sidebarReducer,
            auth: authReducer
        }
    },
    applyMiddleware(thunkMiddleware)
); */


export default store;

window.store = store;



