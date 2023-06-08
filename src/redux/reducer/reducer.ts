import { State, StateActionTypes } from '../../types/state';

const initialState : State = {
    isLoading: false,
    posts: [],
    comments: [],
    users: [],
    userPage: {
        id: null,
        email: null,
        name:null,
        username: null,
        phone: null,
        website: null,
    },
    userPosts:[],
    filteredPosts: [],
    searchValue: '',
}

export const reducer = ( state = initialState, action: any) : any => {
    switch(action.type) {
        case StateActionTypes.SET_POSTS: 
            return {
                ...state,
                isLoading: false,
                posts: [...action.payload]
            }
        case StateActionTypes.SET_COMMENTS:
            return {
                ...state,
                isLoading: false,
                comments: [ ...state.comments, ...action.payload]
            }
        case StateActionTypes.IS_LOADING: 
            return {
                ...state,
                isLoading: true,
            }
        case StateActionTypes.SET_USER_PAGE:
            return {
                ...state,
                userPage: action.payload,
                isLoading: false,
            }
        case StateActionTypes.SET_USER_POSTS:
            return {
                ...state,
                userPosts: [...action.payload],
                isLoading: false,
            }
        case StateActionTypes.FILTERED_POSTS:
            console.log(action.payload)
            const filteredPosts = state.posts.filter( el => {
                return el.title.toLowerCase().includes(action.payload.toLowerCase())
            })
            return {
                ...state,
                filteredPosts: [...filteredPosts],
                searchValue: action.payload,
            }
        
        default: 
            return {...state}
    }
}
