import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-reducer';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

let store = configureStore(
    {
        reducer: {
            profilePage: profileReducer,
            dialogsPage: dialogsReducer,
            usersPage: usersReducer,
            sidebar: sidebarReducer,
            auth: authReducer,
            form: formReducer,
            app: appReducer
        }
    }
);


export default store;

window.store = store;



