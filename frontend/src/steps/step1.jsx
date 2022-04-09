//Stationery

import axios from 'axios';
export const getAllStationeries=()=>async dispatch=>{
    dispatch({type:'GET_STATIONERIES_REQ'})
    try{
        const res = await axios.get('/api/stationeries/getallstationeries')
        console.log(res);
        dispatch({type:'GET_STATIONERIES_SUCCESSFUL', payload : res.data})
    }
    catch(err){
        dispatch({type:'GET_STATIONERIES_FAILED', payload : err})
    }
}

export const getStationeryById=(stationeryid)=>async dispatch=>{
    dispatch({type:'GET_STATIONERYBYID_REQ'})
    try{
        const res = await axios.post('/api/stationeries/getstationerybyid', {stationeryid})
        console.log(res);
        dispatch({type:'GET_STATIONERYBYID_SUCCESSFUL', payload : res.data})
    }
    catch(err){
        dispatch({type:'GET_STATIONERYBYID_FAILED', payload : err})
    }
}

export const filterStationeries=(searchkey, category)=>async dispatch=>{
    var filteredStationeries;
    dispatch({type:'GET_STATIONERIES_REQ'})
    try{
        const res = await axios.get('/api/stationeries/getallstationeries')
        filteredStationeries = res.data.filter(stationery=>stationery.name.toLowerCase().includes(searchkey))
        if(category!='all')
        {
            filteredStationeries = res.data.filter(stationery=>stationery.category.toLowerCase()==category)
        }
        dispatch({type:'GET_STATIONERIES_SUCCESSFUL', payload : filteredStationeries})
    }
    catch(err){
        dispatch({type:'GET_STATIONERIES_FAILED', payload : err})
    }
}


export const addStationery=(stationery)=> async dispatch=>{
    dispatch({type:'ADD_STATIONERY_REQ'})
    try{
        const res = await axios.post('/api/stationeries/addstationery', {stationery})
        console.log(res);
        dispatch({type:'ADD_STATIONERY_SUCCESSFUL'})
    }catch (err){
        dispatch({type:'ADD_STATIONERY_FAILED', payload:err})
    }
}

export const updateStationery=(updatedstationery)=> async dispatch=>{
    dispatch({type:'UPDATE_STATIONERY_REQ'})
    try{
        const res = await axios.post('/api/stationeries/updatestationery', {updatedstationery})
        console.log(res);
        dispatch({type:'UPDATE_STATIONERY_SUCCESSFUL'})
        window.location.href = '/admin/stationerieslist'
    }catch (err){
        dispatch({type:'UPDATE_STATIONERY_FAILED', payload:err})
    }
}

export const deleteStationery=(stationeryid)=>async dispatch=>{
    try{
        const res = await axios.post('/api/stationeries/deletestationery', {stationeryid})
        alert('Stationery Deleted Successfully')
        console.log(res);
        window.location.reload()
    } catch (err){
        alert('Something went wrong')
        console.log(err)
    }
}