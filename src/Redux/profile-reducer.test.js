import profileReducer, { addPostActionCreator } from "./profile-reducer";

it('new post should be added', () => {

    // 1) test data
    let action = addPostActionCreator("Masha");
    let state = {
        postsData: [
            { id: 1, message: 'It\'s my first post', likesCount: 1 },
            { id: 2, message: 'Hi, how are you?', likesCount: 5 },
            { id: 3, message: 'Yo!', likesCount: 8 }
        ]
    };

    // 2) action
    let newState = profileReducer(state, action);

    // 3) expectation
    expect(newState.postsData.length).toBe(4);
});

