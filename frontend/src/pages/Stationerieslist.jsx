import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStationeries, deleteStationery } from '../steps/step1';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import { Link } from "react-router-dom";
export default function Stationerieslist() {

    const dispatch = useDispatch();
    const stationeriesstate = useSelector((state) => state.getAllStationeriesReducer);
    const { stationeries, err, loading } = stationeriesstate;
    useEffect(() => {
        dispatch(getAllStationeries());
    }, []);
    return (
        <div>
            <h2>Stationery List</h2>
            {loading && (<Loading/>)}
            {err && (<Alert err='Something Went Wrong' />)}

            <table className='table table-bordered'>
                <thead className='thead'>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {stationeries && stationeries.map(stationery=>{
                    return <tr>
                        <td>{stationery.name}</td>
                        <td>{stationery.price}</td>
                        <td>{stationery.category}</td>
                        <td><i className='fa fa-trash m-1' style={{color:'red'}} onClick={()=>{dispatch(deleteStationery(stationery._id))}}></i>
                        <Link to={`/admin/updatestationery/${stationery._id}`}><i className='fa fa-edit m-1'></i></Link>
                        </td>
                    </tr>

                })}
                </tbody>
            </table>
            
        </div>
    )
}