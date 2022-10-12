const {get, post, put} = require('./AxiosHelper');

const CartServices = {
  getCart() {
    return get('/cart/api/app/customer-cart');
  },
  addToCart(postData) {
    return post('/cart/api/app/customer-cart/item', postData);
  },
  updateQuantity(putData) {
    return put('/cart/api/app/customer-cart/change-quantity', putData);
  },
};

export default CartServices;
