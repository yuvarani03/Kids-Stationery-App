import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStationeryById, updateStationery } from '../steps/step1'
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import Success from '../components/Success';
export default function Updatesatationery({ match }) {
    const dispatch = useDispatch()
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [image, setimage] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');

    const getstationerybyidstate = useSelector(state => state.getStationeryByIdReducer)
    const { stationery, err, loading } = getstationerybyidstate
    const updatestationerystate = useSelector((state) => state.updateStationeryReducer)
    const { updateloading, updatesuccess } = updatestationerystate

    useEffect(() => {
        if (stationery) {
            if (stationery._id == match.params.stationeryid) {
                setname(stationery.name)
                setprice(stationery.price)
                setimage(stationery.image)
                setdescription(stationery.description)
                setcategory(stationery.category)
            }
            else {
                dispatch(getStationeryById(match.params.stationeryid));
            }
        }
        else {
            dispatch(getStationeryById(match.params.stationeryid));
        }
    }, [stationery, dispatch])

    function formHandler(e) {
        e.preventDefault();
        const updatedstationery = {
            _id: match.params.stationeryid,
            name,
            price,
            category,
            image,
            description
        }
        dispatch(updateStationery(updatedstationery))
    }
    return (
        <div>
            <h1>Update Stationery</h1>
            <h1>Stationery Id = {match.params.stationeryid}</h1>
            <div>
                {loading && (<Loading />)}
                {err && (<Alert err='Something went wrong' />)}
                {updatesuccess && (<Success success='Stationery details updated successfully' />)}
                {updateloading && (<Loading />)}
                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='price' value={price} onChange={(e) => { setprice(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='image' value={image} onChange={(e) => { setimage(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    <button className='btn mt-5' type='submit'>Update Stationery</button>
                </form>
            </div>
        </div>
    )
}