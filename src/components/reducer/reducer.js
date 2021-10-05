export const reducer = (state, action) => {

    if (action.type === "INCREMENT") {
      const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
  
      return { ...state, item: updatedCart };
    }
  
   
    return state;
  };