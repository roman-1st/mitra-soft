import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from "redux-saga/effects"
import { StateActionTypes } from '../../types/state';

const fetchPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts')

const loading = (ms: number) => new Promise(res => setTimeout(res, ms)) // имитация загрузки в 1 сек

function* fetchPostsWorker() {
    try {
        yield put({ type: StateActionTypes.IS_LOADING })
        yield loading(1000)
        const response: AxiosResponse = yield call(fetchPosts);
        yield put({ type: StateActionTypes.SET_POSTS, payload: response.data });
    } catch (error) {
        yield (console.log('error'));
    }
}

export function* postsWatcher() {
    yield takeEvery(StateActionTypes.FETCH_POSTS, fetchPostsWorker)
}