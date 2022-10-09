import {useEffect, useState} from 'react';
import ProductServices from '../../services/ProductServices';

const useGetProductById = (id: string) => {
  const [res, setRes] = useState();

  useEffect(() => {
    ProductServices.getProductDetail(id)
      .then(res => {
        setRes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return res;
};

export default useGetProductById;
