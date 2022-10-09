const {get, post} = require('./AxiosHelper');

const CartServices = {
  getCart() {
    return get('/cart/api/app/customer-cart');
  },
  addToCart(postData) {
    return post('/cart/api/app/customer-cart/item', postData);
  },
};

export default CartServices;
