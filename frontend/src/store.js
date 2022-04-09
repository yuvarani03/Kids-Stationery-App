import {combineReducers} from 'redux'
import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllStationeriesReducer, addStationeryReducer,  getStationeryByIdReducer, updateStationeryReducer} from './reducers/stationeryReducers'
import { cartReducer } from './reducers/cartReducer'
import { userLoginReducer, userRegisterReducer, getAllUsersReducer } from './reducers/userReducer'
import { placeOrderReducer, getUserOrdersReducer, getAllOrdersReducer } from './reducers/orderReducer'

const final = combineReducers({
    getAllStationeriesReducer : getAllStationeriesReducer,
    cartReducer : cartReducer,
    userRegisterReducer : userRegisterReducer,
    userLoginReducer : userLoginReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addStationeryReducer : addStationeryReducer,
    getStationeryByIdReducer : getStationeryByIdReducer,
    updateStationeryReducer : updateStationeryReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllUsersReducer : getAllUsersReducer
})
const cartData = localStorage.getItem('cartData')? JSON.parse(localStorage.getItem('cartData')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    cartReducer : {
    cartData : cartData
    },
    userLoginReducer: {
        currentUser:currentUser
    }
   
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(final, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store