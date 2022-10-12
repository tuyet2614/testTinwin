import CartServices from '../../services/CartServices';

const useDeleteFromCart = () => {
  const deleteFromCart = (id: string, customerCartId: string) => {
    CartServices.deleteFromCart(id, customerCartId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return deleteFromCart;
};

export default useDeleteFromCart;
