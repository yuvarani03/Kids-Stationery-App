import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import { getAllUsers, deleteUser } from '../steps/step3'
export default function Userslist(){

    const dispatch = useDispatch()
    const usersstate = useSelector(state=>state.getAllUsersReducer)
    const {err, loading, users} = usersstate

    useEffect(()=>{
        dispatch(getAllUsers());
    },[])
    return (
        <div>
            <h1>Users List</h1>
            {loading && (<Loading/>)}
            {err && <Alert err = 'Something Went Wrong'/>}
            <table className='table table-striped table-bordered table-responsive-sm'>
                <thead className='thead'>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {users && users.map(user=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.fname}{user.lname}</td>
                            <td>{user.email}</td>
                            <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}