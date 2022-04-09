//order
import axios from 'axios';
export const placeOrder=(token, totalamount)=>async(dispatch, getState)=>{
    dispatch({type:'PLACE_ORDER_REQ'})
    const currentUser=getState().userLoginReducer.currentUser
    const cartData = getState().cartReducer.cartData
    try {
        const res= await axios.post('/api/orders/placeorder', {token, totalamount, currentUser,cartData})
        dispatch({type:'PLACE_ORDER_SUCCESSFUL'})
        console.log(res);
    }catch(err){
        dispatch({type:'PLACE_ORDER_FAILED'})
        console.log(err);
    }
}

export const getUserOrders=()=>async (dispatch, getState)=>{
    const currentUser = getState().userLoginReducer.currentUser
    dispatch({type:'GET_USER_ORDERS_REQ'})
    try{
        const res = await axios.post('/api/orders/getuserorders',{userid : currentUser._id})
        console.log(res);
        dispatch({type:'GET_USER_ORDERS_SUCCESSFUL', payload : res.data})
    }
    catch(err){
        dispatch({type:'GET_USER_ORDERS_FAILED', payload : err})
    }
}

export const getAllOrders=()=>async dispatch=>{
    dispatch({type:'GET_ALLORDERS_REQ'})
    try{
        const res = await axios.get('/api/orders/getallorders')
        console.log(res);
        dispatch({type:'GET_ALLORDERS_SUCCESSFUL', payload : res.data})
    }
    catch(err){
        dispatch({type:'GET_ALLORDERS_FAILED', payload : err})
    }
}

export const deliverOrder=(orderid)=>async dispatch=>{
    try{
        const res = await axios.post('/api/orders/deliverorder', {orderid})
        console.log(res);
        alert('Order Delivered')
        const orders = await axios.get('/api/orders/getallorders')
        dispatch({typr:'GET_ALLORDERS_SUCCESSFUL', payload : orders.data})
    } catch (err){
        console.log(err)
    }
}