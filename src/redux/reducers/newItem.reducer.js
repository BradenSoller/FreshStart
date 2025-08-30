const newItem = (state = [], action) => {

    switch (action.type) {
        case 'NEW_ITEM':
            return action.payload
        default:
            return state;
    }
}

export default newItem;