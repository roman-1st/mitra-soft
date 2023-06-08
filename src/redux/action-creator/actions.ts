import { User } from './../../types/state';
import { Post,Comments, StateActionTypes } from "../../types/state";

export const fetchPostsAction = () => ({ type: StateActionTypes.FETCH_POSTS})

export const setPostsAction = (payload: Post[]) => {
    return ({ type: StateActionTypes.SET_POSTS, payload})
}

export const fetchCommentsAction = (payload: number) => {
    return ({ type: StateActionTypes.FETCH_COMMENTS, payload})
}

export const setCommentsAction = (payload: Comments[]) => {
    return ({ type: StateActionTypes.SET_COMMENTS, payload})
}

export const fetchUserPageAction = (payload: number) => {
    return ({ type: StateActionTypes.FETCH_USER_PAGE, payload})
}

export const setUserPageAction = (payload: User) => {
    return ({type: StateActionTypes.SET_USER_PAGE, payload})
}

export const filteredPostsAction = (payload: String) => {
    return ({type: StateActionTypes.FILTERED_POSTS, payload})
}