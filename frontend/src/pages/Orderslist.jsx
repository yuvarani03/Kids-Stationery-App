import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, deliverOrder } from '../steps/step4';
import Alert from '../components/Alert';
import Loading from '../components/Loading';
export default function Orderslist(){
    const dispatch = useDispatch()
    const getordersstate = useSelector(state=>state.getAllOrdersReducer)
    const {loading, err, orders} = getordersstate
    useEffect(()=>{
        dispatch(getAllOrders());
    },[])
    return (
        <div>
            <h1>Orders List</h1>
            {loading &&(<Loading/>)}
            {err && (<Alert err='Something went wrong'/>)}
            <table className='table table-striped table-bordered'>
                <thead className='thead'>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order=>{
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0,10)}</td>
                            <td>
                                {order.isDelivered ? (<h1>Delivered</h1>) : (<button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}