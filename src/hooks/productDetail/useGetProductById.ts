import {useEffect, useState} from 'react';
import ProductServices from '../../services/ProductServices';

const useGetProductById = (id: string) => {
  const [res, setRes] = useState();

  const params = {
    ids: id,
  };

  useEffect(() => {
    ProductServices.getProductDetail(params)
      .then(res => {
        setRes(res.data[0]);
      })
      .catch(err => console.log(err));
  }, []);

  return res;
};

export default useGetProductById;
