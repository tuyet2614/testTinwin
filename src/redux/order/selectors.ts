import {createSelector} from 'reselect';

const orderReducer = (state: any) => state.order;

export const getOrderSelector = createSelector(orderReducer, state => state);
