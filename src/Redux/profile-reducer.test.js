import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    postsData: [
        { id: 1, message: 'It\'s my first post', likesCount: 1 },
        { id: 2, message: 'Hi, how are you?', likesCount: 5 },
        { id: 3, message: 'Yo!', likesCount: 8 }
    ]
};

it('length of postsData should be incremented', () => {

    // 1) test data
    let action = addPostActionCreator("Masha");
    

    // 2) action
    let newState = profileReducer(state, action);

    // 3) expectation
    expect(newState.postsData.length).toBe(4);
});

it('message of new post should be correct', () => {

    // 1) test data
    let action = addPostActionCreator("Masha");
    

    // 2) action
    let newState = profileReducer(state, action);

    // 3) expectation
    expect(newState.postsData[3].message).toBe("Masha");
});

it('after deleting length of postsData should be decremented', () => {

    // 1) test data
    let action = deletePost(1);
    

    // 2) action
    let newState = profileReducer(state, action);

    // 3) expectation
    expect(newState.postsData.length).toBe(2);
});

it('after deleting length of postsData should not be decremented if id is incorrect', () => {

    // 1) test data
    let action = deletePost(1000);
    

    // 2) action
    let newState = profileReducer(state, action);

    // 3) expectation
    expect(newState.postsData.length).toBe(3);
});

