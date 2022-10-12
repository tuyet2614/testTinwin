const {get, post, put, deleteMethod} = require('./AxiosHelper');

const CartServices = {
  getCart() {
    return get('/cart/api/app/customer-cart');
  },
  addToCart(postData) {
    return post('/cart/api/app/customer-cart/item', postData);
  },
  deleteFromCart(id, customerCartId) {
    return deleteMethod(
      `/cart/api/app/customer-cart/${id}/item/${customerCartId}`,
    );
  },
  updateQuantity(putData) {
    return put('/cart/api/app/customer-cart/change-quantity', putData);
  },
};

export default CartServices;
