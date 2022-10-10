import {createSelector} from 'reselect';

const getUserState = (state: any) => state.dataUser;

export const getUserSelector = createSelector(getUserState, state => state);
