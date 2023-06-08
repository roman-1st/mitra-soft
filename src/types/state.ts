export interface Post {
    userId: string,
    id: number,
    title: string,
    body: string,
}

export interface Comments {
    postId: string,
    id: number,
    name: string,
    email: string,
    body: string,
}

export interface User {
    id: number | null,
    name: string | null,
    username: string | null,
    email: string | null,
    phone: string | null,
    website: string | null,
}

export interface State {
    posts: Post[],
    users: User[],
    userPage: User,
    userPosts: Post[],
    comments: Comments[],
    isLoading: boolean,
    filteredPosts: Post[],
    searchValue: string,
}

export enum StateActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    SET_POSTS = "SET_POSTS",

    FETCH_COMMENTS = "FETCH_COMMENTS",
    SET_COMMENTS = "SET_COMMENTS",

    FETCH_USER_PAGE = "FETCH_USER_PAGE",
    SET_USER_PAGE = "SET_USER_PAGE",
    SET_USER_POSTS = "SET_USER_POSTS",

    FILTERED_POSTS = "FILTERED_POSTS",
    
    IS_LOADING = "IS_LOADING",
}

export type getPostsAction = {
    type: StateActionTypes.FETCH_POSTS,
}

export type setPostsAction = {
    type: StateActionTypes.SET_POSTS,
    payload: Post[],
}

export type fetchUserPage = {
    type: StateActionTypes.FETCH_USER_PAGE,
    payload: number,
}

export type setUserPageAction = {
    type: StateActionTypes.SET_USER_PAGE,
    payload: User,
}

export type setUserPagePostsAction = {
    type: StateActionTypes.SET_USER_POSTS,
    payload: Post[],
}

export type isLoadingAction = {
    type: StateActionTypes.IS_LOADING,
}

export type filteredPostsAction = {
    type: StateActionTypes.FILTERED_POSTS,
    payload: string,
}

export type StateActions = 
    getPostsAction |
    setPostsAction|
    fetchUserPage | 
    setUserPageAction |
    isLoadingAction 
