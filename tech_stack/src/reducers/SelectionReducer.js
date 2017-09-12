export default (state = null, action) => {  //if initial is undefined, then it is null
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};