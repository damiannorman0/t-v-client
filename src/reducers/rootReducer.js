import { combineReducers } from 'redux';
import petsReducer from "reducers/petsReducer";


export default combineReducers({
	pets: petsReducer
});
