import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../steps/step4';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
export default function Orderspage() {
    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, err, loading } = orderstate
    useEffect(() => {
        dispatch(getUserOrders());
    }, [])
    return (
        <div>
            <h2 style={{ fontSize: '35px' }}>My Orders</h2>
            <div className="row justify-content-center">
                {loading && (<Loading />)}
                {err && (<Alert err='Something went wrong' />)}
                {orders && orders.map(order => {
                    return <div className='col-md-8 m-2 p-1' id='orderbox'>
                        <div className="flex-container">
                            <div className='text-start w-100 -1'>
                                <h2 style={{fontsize:'25px'}}>Items</h2>
                                <hr/>
                                {order.orderData.map(data => {
                                    return <div>
                                        <p>{data.name} {data.quantity} = {data.amount}</p>
                                    </div>
                                })}
                            </div>
                            <div className='text-start w-100 -1'>
                            <h2 style={{fontsize:'25px'}}>Address</h2><hr/>
                            <p>Street : {order.shippingAddress.street}</p>
                            <p>City : {order.shippingAddress.city}</p>
                            <p>Country : {order.shippingAddress.country}</p>
                            <p>Pincode : {order.shippingAddress.pincode}</p>
                            </div>
                            <div className='text-start w-100 -1'>
                            <h2 style={{fontsize:'25px'}}>Order Details</h2> <hr/>
                            <p>Order Amount : {order.orderAmount}</p>
                            <p>Date: {order.createdAt.substring(0,10)}</p>
                            <p>Transaction Id: {order.transactionId}</p>
                            <p>Order Id: {order._id}</p>

                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}