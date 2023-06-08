import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from "redux-saga/effects"
import { StateActionTypes } from '../../types/state';

const fetchComments= (id: number) => axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)

const loading = (ms: number) => new Promise(res => setTimeout(res, ms)) // имитация загрузки в 1 сек

function* fetchCommentsWorker(action: any) {
    console.log(action);
    
    try {
        // yield put({ type: StateActionTypes.IS_LOADING })
        yield loading(1000)
        const response: AxiosResponse = yield call(fetchComments, action.payload);
        yield put({ type: StateActionTypes.SET_COMMENTS, payload: response.data });
    } catch (error) {
        yield (console.log('error'));
    }
}

export function* commentsWatcher() {
    yield takeEvery(StateActionTypes.FETCH_COMMENTS, fetchCommentsWorker)
}