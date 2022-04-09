//user
import axios from 'axios';
export const userRegister = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        const res = await axios.post('/api/users/registration', user)
        console.log(res);
        dispatch({ type: 'USER_REGISTER_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error })
    }
}

export const userLogin = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQ' })
    try {
        const res = await axios.post('/api/users/login', user)
        console.log(res);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.data })
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href='/'
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
    }
}

export const userLogout=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href= '/login'
}

export const getAllUsers=()=>async dispatch=>{
    dispatch({type:'GET_USERS_REQUEST'})
    try {
        const response = await axios.get('/api/users/getallusers')
        console.log(response);
        dispatch({type:'GET_USERS_SUCCESS' , payload : response.data})  
    } catch (error) {
        dispatch({type:'GET_USERS_FAILED' , payload : error})
    }
}

export const deleteUser=(userid)=>async dispatch=>{
    try {
        await axios.post('/api/users/deleteuser', {userid})
        alert('User deleted successfully')
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }
}