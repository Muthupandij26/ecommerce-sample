import Product from '../product/Product'
import { Home } from '../home/Home'

const initialState = {
    counter: 0
}

function rootReducer (state = initialState, action)
{
    switch (action.type) {
        case 'INCREMENT' :  
            if( 1 == action.payload) 
            {
                return { counter : state.counter + 1 }
            }
            else {
                return {counter:0}
            }

            
        case 'DECREMENT' :
            return { counter : state.counter - 1 }
        default :
            return state;
    }
}

export default rootReducer 