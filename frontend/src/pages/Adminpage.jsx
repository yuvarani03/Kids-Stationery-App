import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import Addstationery from './Addstationery';
import Orderslist from './Orderslist';
import Stationerieslist from './Stationerieslist';
import Userslist from './Userslist';
import Updatesatationery from './Updatestationery';
export default function Adminpage() {
    const userstate = useSelector(state => state.userLoginReducer)
    const { currentUser } = userstate;

    //if current user is not the admin it will redirect to homepage
    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    })

    return (
        <div>
            <div className='row justify-content-center'>
                <div className="col-md-10">
                    <h2 style={{ fontsize: '35px' }}> Admin Panel</h2>
                    <ul className='afn'>
                        <li><Link to={'/admin/userslist'}>Users List</Link></li>
                        <li><Link to={'/admin/stationerieslist'}>Stationeries List</Link></li>
                        <li><Link to={'/admin/addstationery'}>Add New Stationery</Link></li>
                        <li><Link to={'/admin/orderslist'}>Orders List</Link></li>
                    </ul>
                    <Switch>
                    <Route path ='/admin' exact component={Userslist}/>
                        <Route path ='/admin/userslist' exact component={Userslist}/>
                        <Route path ='/admin/orderslist' exact component={Orderslist}/>
                        <Route path ='/admin/stationerieslist' exact component={Stationerieslist}/>
                        <Route path ='/admin/addstationery' exact component={Addstationery}/>
                        <Route path ='/admin/updatestationery/:stationeryid' exact component={Updatesatationery}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}
