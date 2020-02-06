import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

function* addItemSaga(action) {
    console.log('bro');
    
    try{
        yield axios.post('/api/shelf', action.payload);
        yield put ({
            type: 'GET_ITEMS',
        })}
        catch (error) {
            console.log('post broken at saga', error);
    }
}

function* watcherSaga() {
    yield takeLatest('POST_ITEM', addItemSaga);
}

export default watcherSaga;