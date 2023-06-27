export const goodsReducer = (state = { goodsList: [], total: 0 }, { type, payload }) => {
    switch (type) {
        case 'setGoods':
            return payload;
        default:
            return state;
    }
}