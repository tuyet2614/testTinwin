const GET_ORDER = 'GET_ORDER';
const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
const GET_ORDER_FAIL = 'GET_ORDER_FAIL';
const getOrder = (data: object) => ({
  type: GET_ORDER,
  payload: data,
});

export {GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAIL, getOrder};
