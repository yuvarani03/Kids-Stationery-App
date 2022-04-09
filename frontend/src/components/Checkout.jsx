import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../steps/step4';
import Loading from "../components/Loading";
import Success from "../components/Success";
import Alert from "../components/Alert";
export default function Checkout({ totalamount }) {
    const orderstate = useSelector((state) => state.placeOrderReducer);
    const userstate = useSelector((state) => state.userLoginReducer);
    const { currentUser } = userstate;
    const { loading, err, success } = orderstate;
    const dispatch = useDispatch();
    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, totalamount));
    }
    return (
        <div>
            {loading && (<Loading />)}
            {err && (<Alert err='Something Went Wrong' />)}
            {success && (<Success success='Your Order Placed Successfully' />)}
            {currentUser ? (
                <StripeCheckout
                    amount={totalamount * 100}
                    shippingAddress
                    token={tokenHander}
                    stripeKey='pk_test_51KhpxBE4SeQ20y50lyKqupKOD8DDuyudOOVn2e779PMurwPAfqGoGAeXjh1uEyGQK9PuTD2rP0iy9dOZVT5AhiCl00u3pygT0B'
                    currency='INR'
                >
                    <button className='btn'>Pay Now</button>
                </StripeCheckout>
            ) : (
                <a className="check-link" href="/login"> Please Login to pay </a>
            )}
        </div>
    )
}