const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [ /*
        { id: 1, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: true, fullName: 'Alex', status: "Hello!", location: { city: 'Moscow', country: 'Russia' } },
        { id: 2, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: true, fullName: 'Theo', status: "Cool!", location: { city: 'Dresden', country: 'Germany' } },
        { id: 3, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: false, fullName: 'Katja', status: "I'm a superstar", location: { city: 'Stavropol', country: 'Russia' } },
        { id: 4, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: true, fullName: 'Ivan', status: "Hi!", location: { city: 'Moscow', country: 'Russia' } },
        { id: 5, photo: 'https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg', followed: false, fullName: 'Larisa', status: "Yo!", location: { city: 'Paris', country: 'France' } }
*/],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
            case TOGGLE_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.isFetching
                }
        default:
            return state;
    }
}

export const followActionCreator = (userID) => ({ type: FOLLOW, userID })

export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID })

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCountActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

export const toggleIsFetchingActionCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })



export default usersReducer;