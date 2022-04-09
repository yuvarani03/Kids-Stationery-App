import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterStationeries } from '../steps/step1'
export default function Filter() {
    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] = useState('all')
    return (
        <div className='container w-50'>
            <div className='row justify-content-center shadow-lg p-2 mb-5 bg-white rounded' id='container'>
                <div className='col-md-3'>
                    <input value={searchkey} onChange={(e) => { setsearchkey(e.target.value) }} type="text" className='form-control mt-2' placeholder='Search Stationeries' />
                </div>
                <div className='col-md-3'>
                    <select className='form-control mt-2' value={category} onChange={(e) => { setcategory(e.target.value) }}>
                        <option value="all">All</option>
                        <option value="pen">Pen</option>
                        <option value="paper">Paper</option>
                        <option value="pencil">Pencil</option>
                        <option value="scale">Scale</option>
                        <option value="pouch">Pouch</option>
                        <option value="bag">Bag</option>
                    </select>
                </div>
                <div className='col-md-3'>
                    <button className='btn mt-2 w-100' onClick={() => { dispatch(filterStationeries(searchkey, category)) }}>FILTER</button>
                </div>
            </div>

        </div>
    )
}