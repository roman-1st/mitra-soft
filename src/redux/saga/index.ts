import {all} from 'redux-saga/effects'
import { commentsWatcher } from './commensSaga'
import { postsWatcher } from './postsSaga'
import { userPageWatcher } from './userSaga'

export function* rootWatcher () {
    yield all([
        postsWatcher(), 
        commentsWatcher(),
        userPageWatcher(),
    ])
}