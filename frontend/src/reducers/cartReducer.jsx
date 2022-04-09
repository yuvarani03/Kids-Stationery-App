export const cartReducer = (state = { cartData: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
//check cart data is already present or not
            const alreadyExists = state.cartData.find(data => data._id === action.payload._id)
            if(alreadyExists) {
                return{
                    ...state,
                    cartData:state.cartData.map(data=> data._id===action.payload._id ? action.payload:data)
                }

            }
            //new data
            else {
                return {
                    ...state,
                    cartData: [...state.cartData, action.payload]
                }
            }
            case 'DEL_FROM_CARTLIST' : 
            return{
                ...state,
                cartData:state.cartData.filter(data=>data._id !==action.payload._id)
            }
        default:
            return state
    }
}