import { combineReducers } from 'redux';

const items = (state = [], action)=>{
    if (action.type === 'SET_ITEMS'){
        return action.payload
    }
    else{
        return state;
    }

}

export default combineReducers({
    items,
})
