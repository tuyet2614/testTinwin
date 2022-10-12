import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  SET_WISHLIST,
  UPDATE_QUANTITY,
} from './constants';

interface WishlistState {
  wishlist: object[];
}

const initState: WishlistState = {
  wishlist: [],
};

const wishlistReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case SET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case ADD_TO_WISHLIST:
      return {...state, wishlist: [...state.wishlist, action.payload]};
    case DELETE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: [
          ...state.wishlist.filter(item => item.id !== action.payload.id),
        ],
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        wishlist: state.wishlist.map(item => {
          if (item.id === action.payload.id) {
            return {...item, quantity: action.payload.quantity};
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
