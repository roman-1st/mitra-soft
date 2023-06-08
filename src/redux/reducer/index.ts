import { reducer } from './reducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    state: reducer,
})

export type RootState = ReturnType<typeof rootReducer>
