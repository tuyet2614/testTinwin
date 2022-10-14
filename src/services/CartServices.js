const {get, post, put, deleteMethod} = require('./AxiosHelper');

const CartServices = {
  getCart() {
    return get('/webbff/cart/api/app/customer-cart');
  },
  addToCart(postData) {
    return post('/webbff/cart/api/app/customer-cart/item', postData);
  },
  deleteFromCart(id, customerCartId) {
    return deleteMethod(
      `/webbff/cart/api/app/customer-cart/${id}/item/${customerCartId}`,
    );
  },
  updateQuantity(putData) {
    return put('/webbff/cart/api/app/customer-cart/change-quantity', putData);
  },
};

export default CartServices;
