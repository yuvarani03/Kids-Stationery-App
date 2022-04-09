import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStationery } from '../steps/step1'
import Loading from "../components/Loading";
import Success from "../components/Success";
import Alert from "../components/Alert";
export default function Addstationery() {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [image, setimage] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');

    const dispatch = useDispatch()

    const addstationerystate = useSelector(state => state.addStationeryReducer);
    const { err, success, loading } = addstationerystate;

    function formHandler(e) {
        e.preventDefault();
        const stationery = {
            name,
            price,
            category,
            image,
            description
        }
        console.log(stationery);
        dispatch(addStationery(stationery));
    }
    return (
        <div>
            <div>
                <h1>Add Stationery</h1>
                {loading && (<Loading/>)}
                {err && (<Alert err='Something went wrong'/>)}
                {success && (<Success success='New Stationery added successfully'/>)}
                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='price' value={price} onChange={(e) => { setprice(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='image' value={image} onChange={(e) => { setimage(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    <button className='btn mt-5' type='submit'>Add Stationery</button>
                </form>
            </div>
        </div>
    )
}