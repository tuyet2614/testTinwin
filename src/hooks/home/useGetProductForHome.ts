import {useEffect, useState} from 'react';
import HomeServices from '../../services/HomeServices';

const useGetProductForHome = () => {
  const [res, setRes] = useState();

  useEffect(() => {
    HomeServices.getProductForHome()
      .then(res => {
        setRes(res.data.listTopSearchProduct.items);
      })
      .catch(err => console.log(err));
  }, []);

  return res;
};

export default useGetProductForHome;
