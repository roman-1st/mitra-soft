import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from "redux-saga/effects"
import { StateActionTypes } from '../../types/state';

const fetchUser = (userId: number) => axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
const fetchUserPosts = (userId: number) => axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)

const loading = (ms: number) => new Promise(res => setTimeout(res, ms)) // имитация загрузки в 1 сек

function* fetchUserPageWorker(action: any) {
    try {
        yield put({ type: StateActionTypes.IS_LOADING })
        yield loading(1000)
        const responseUser: AxiosResponse = yield call(fetchUser, action.payload);
        
        yield put({ type: StateActionTypes.SET_USER_PAGE, payload: responseUser.data });
        const responsePosts: AxiosResponse = yield call(fetchUserPosts, action.payload);
        yield put ({type: StateActionTypes.SET_USER_POSTS, payload: responsePosts.data})
    } catch (error) {
        yield (console.log('error'));
    }
}

export function* userPageWatcher() {
    yield takeEvery(StateActionTypes.FETCH_USER_PAGE, fetchUserPageWorker)
}