export const initialState = {
    basket: [],
    user:null,
};

function reducerr(state, action) {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            //LOGIC FOR ADDING TO BASKET
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
            break;
        case "REMOVE_TO_BASKET":
            //LOGIC FOR REMOVING ITEM FROM BASKET
            return {state};
            break;
        default:
            return state;
    }
}

export default reducerr;
/*
*/