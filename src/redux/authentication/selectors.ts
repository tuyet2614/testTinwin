import {createSelector} from 'reselect';

const authReducer = (state: any) => state.authReducer;

export const getAuth = createSelector(authReducer, state => state);
