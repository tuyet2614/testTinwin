import {createSelector} from 'reselect';

const authReducer = (state: any) => state.auth;

export const getAuth = createSelector(authReducer, state => state);
