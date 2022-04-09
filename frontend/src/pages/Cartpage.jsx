import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Checkout from "../components/Checkout";
import { addToCart } from "../steps/step2";
import { deleteFromCart } from "../steps/step2";
import { Redirect } from "react-router-dom";
export default function Cartpage() {
    const [redirect, setRedirect] = useState(false);
    const cartstate = useSelector(state => state.cartReducer)
    const cartData = cartstate.cartData
    var totalamount = cartData.reduce((x, data) => x + data.amount, 0)
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.placeOrderReducer);
    const {success} = orderstate;
    if(success){
        localStorage.removeItem("cartData");
        cartData.map((data)=>{
            dispatch(deleteFromCart(data))
        });
        setTimeout(() => {
            setRedirect(true);
          }, 2000);
    }
    if (redirect) {
        return <Redirect to="/orders" />;
      }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h3>CART LIST</h3>
                    {cartData.map((data) => {
                        return <div className="flex-container">
                            <div className="text-start m-1 w-100">
                                <h1>{data.name}</h1>
                                <img src={data.image} style={{ height: '80px' }}></img>
                            </div>
                            <div className="m-1 w-100 mt-3">
                                <h1 style={{ display: 'inline' }}>Quantity:</h1>
                                <i className="fa fa-minus" style={{ color: "red" }} aria-hidden="true" onClick={() => { dispatch(addToCart(data, data.quantity - 1)) }}></i>
                                <b>{data.quantity}</b>
                                <i className="fa fa-plus" style={{ color: "green" }} aria-hidden="true" onClick={() => { dispatch(addToCart(data, data.quantity + 1)) }}></i>
                                <h1>Price: {data.quantity}*{data.price}={data.amount}</h1>
                                <button className="mt-3" style={{ color: "orangered", borderBlockColor: "red" }} onClick={() => { dispatch(deleteFromCart(data)) }}>Remove Item</button>
                            </div>
                        </div>
                    })}

                    <div>
                        <br /><br /> <h3 style={{ fontsize: '45px', color: 'green' }}>TotalAmount: Rs {totalamount} /-</h3>
                        <Checkout totalamount={totalamount} />
                    </div>
                </div>

            </div>
        </div>
    )
}