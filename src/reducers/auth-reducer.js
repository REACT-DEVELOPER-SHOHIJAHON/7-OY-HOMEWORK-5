const initialState = {
    token: localStorage.getItem('token') || null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action
            }
        default:
            return state
    }
}
