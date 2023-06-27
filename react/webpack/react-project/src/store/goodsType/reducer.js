import { SET_GOODSTYPES } from "../actionsType";

export const typeReducer = (state = [], { type, payload }) => {
    switch (type) {
        case SET_GOODSTYPES:
            return payload;
        default:
            return state;
    }
}