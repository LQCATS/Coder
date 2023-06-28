
export const usersReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'setUsers':
            return payload;
        default:
            return state;
    }
}