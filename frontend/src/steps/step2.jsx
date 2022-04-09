//CartAct

export const addToCart=(stationery, quantity)=>(dispatch , getState)=>{
var cartItem = {
    name:stationery.name,
    _id:stationery._id,
    image:stationery.image,
    quantity:Number(quantity),
    price:stationery.price,
    amount:stationery.price*quantity
}
//limit upto 5 
if(cartItem.quantity>5)
{
    alert('Your limit is only upto 5')
}
//delete quantity less than 1
else{
    if(cartItem.quantity<1){
        dispatch({type:'DEL_FROM_CARTLIST', payload:stationery})
    }
    else{
    dispatch({type:'ADD_TO_CART', payload: cartItem})
    }
}

const cartData = getState().cartReducer.cartData
localStorage.setItem('cartData', JSON.stringify(cartData))
}

export const deleteFromCart = (stationery)=>(dispatch, getState)=>{
    dispatch({type:'DEL_FROM_CARTLIST', payload:stationery})
    const cartData = getState().cartReducer.cartData
    localStorage.setItem('cartData', JSON.stringify(cartData))
}