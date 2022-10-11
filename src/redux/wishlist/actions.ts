import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  SET_WISHLIST,
  UPDATE_QUANTITY,
} from './constants';

const addToWishlist = (data: object) => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

const deleteFromWishlist = (data: object) => ({
  type: DELETE_FROM_WISHLIST,
  payload: data,
});

const updateQuantity = (data: object) => ({
  type: UPDATE_QUANTITY,
  payload: data,
});

const setWishlist = (data: object) => ({
  type: SET_WISHLIST,
  payload: data,
});

export {addToWishlist, deleteFromWishlist, updateQuantity, setWishlist};
