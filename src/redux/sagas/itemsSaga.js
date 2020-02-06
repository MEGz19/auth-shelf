import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getItems(){
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };

    let response = yield axios.get('/api/shelf', config)
    yield put ({type: 'SET_ITEMS', payload: response.data})
    
}


function* itemsSaga() {
    yield takeLatest('GET_ITEMS', getItems);
}

export default itemsSaga