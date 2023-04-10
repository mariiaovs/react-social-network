import { authorise } from "./auth-reducer";

const INISIALISED_SUCCES = 'INISIALISED_SUCCES';


let initialState = {
    initialised: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INISIALISED_SUCCES:            
            return {
                ...state,
                initialised: true
            }
        default:
            return state;
    }
}

export const initialisedSuccess = () => ({ type: INISIALISED_SUCCES })

export const initialiseApp = () => (dispatch) => {
    let promise = dispatch(authorise());     
    promise.then(() => {
        dispatch(initialisedSuccess());
    });
    
}


export default appReducer;