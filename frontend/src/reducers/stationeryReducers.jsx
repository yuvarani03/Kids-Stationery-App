export const getAllStationeriesReducer=(state={stationeries : []}, action)=>{
    switch(action.type)
    {
        case 'GET_STATIONERIES_REQ' : return{
            loading : true,
            ...state
        }
        case 'GET_STATIONERIES_SUCCESSFUL' : return{
            loading : false,
            stationeries : action.payload
        }
        case 'GET_STATIONERIES_FAILED' : return{
            loading : false,
            err : action.payload

        }
        default : return state
    }
}

export const getStationeryByIdReducer=(state={ }, action)=>{
    switch(action.type)
    {
        case 'GET_STATIONERYBYID_REQ' : return{
            loading : true,
            ...state
        }
        case 'GET_STATIONERYBYID_SUCCESSFUL' : return{
            loading : false,
            stationery : action.payload
        }
        case 'GET_STATIONERYBYID_FAILED' : return{
            loading : false,
            err : action.payload

        }
        default : return state
    }
}

export const addStationeryReducer=(state={ }, action)=>{
    switch(action.type)
    {
        case 'ADD_STATIONERY_REQ' : return{
            loading : true,
            ...state
        }
        case 'ADD_STATIONERY_SUCCESSFUL' : return{
            loading : false,
            success : true
        }
        case 'ADD_STATIONERY_FAILED' : return{
            err : action.payload,
            loading : false 
        }
        default : return state
    }
}

export const updateStationeryReducer=(state={ }, action)=>{
    switch(action.type)
    {
        case 'UPDATE_STATIONERY_REQ' : return{
            updateloading : true,
            ...state
        }
        case 'UPDATE_STATIONERY_SUCCESSFUL' : return{
            updateloading : false,
            updatesuccess : true
        }
        case 'UPDATE_STATIONERY_FAILED' : return{
            updateerr : action.payload,
            updateloading : false 
        }
        default : return state
    }
}