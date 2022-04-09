export const placeOrderReducer =(state={} , action) =>{

    switch(action.type)
    {
        case 'PLACE_ORDER_REQ' : return{
            loading:true
        }
        case 'PLACE_ORDER_SUCCESSFUL' : return{
          loading:false,
          success:true
      }
      case 'PLACE_ORDER_FAILED' : return{
          loading:false,
          err:action.payload
      }
      default : return state
    }

}


export const getUserOrdersReducer=(state={orders: []}, action)=>{
    switch(action.type)
    {
        case 'GET_USER_ORDERS_REQ' : return{
            loading : true,
            ...state
        }
        case 'GET_USER_ORDERS_SUCCESSFUL' : return{
            loading : false,
            orders : action.payload
        }
        case 'GET_USER_ORDERS_FAILED' : return{
            loading : false,
            err : action.payload

        }
        default : return state
    }
}

export const getAllOrdersReducer=(state={orders: []}, action)=>{
    switch(action.type)
    {
        case 'GET_ALLORDERS_REQ' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLORDERS_SUCCESSFUL' : return{
            loading : false,
            orders : action.payload
        }
        case 'GET_ALLORDERS_FAILED' : return{
            err : action.payload,
            loading : false
        }
        default : return state
    }
}